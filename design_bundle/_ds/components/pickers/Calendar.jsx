import React from 'react';

/**
 * Calendar — full month-grid date picker combined with time-slot selection,
 * for choosing a date AND time in one surface (scheduled orders,
 * reservations). Navigate months with the arrows; pick a day, then a time.
 */
export function Calendar({
  value = null,          // { date: 'YYYY-MM-DD', time: 'HH:mm' }
  onChange = () => {},
  timeSlots = ['12:00', '12:30', '13:00', '18:00', '18:30', '19:00', '19:30', '20:00'],
  minDate = null,        // 'YYYY-MM-DD'
}) {
  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const min = minDate ? new Date(minDate + 'T00:00:00') : today;

  const selDate = value?.date || null;
  const selTime = value?.time || null;
  const [cursor, setCursor] = React.useState(() => selDate ? new Date(selDate + 'T00:00:00') : new Date(today));

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthLabel = cursor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const emit = (patch) => onChange({ date: selDate, time: selTime, ...patch });

  const navBtn = {
    width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    border: 'none', background: 'transparent', borderRadius: 'var(--radius-full)',
    color: 'var(--color-text-secondary)', cursor: 'pointer', fontSize: 18, WebkitTapHighlightColor: 'transparent',
  };
  const wd = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div style={{
      width: 300, boxSizing: 'border-box', padding: 'var(--space-base)', background: 'var(--color-bg-surface)',
      border: 'var(--border-width-default) solid var(--color-border-muted)', borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--elevation-card)', fontFamily: 'var(--font-family-base)',
    }}>
      {/* Month header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-sm)' }}>
        <button type="button" style={navBtn} aria-label="Previous month" onClick={() => setCursor(new Date(year, month - 1, 1))}>
          <i className="ph ph-caret-left" aria-hidden="true" />
        </button>
        <span style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{monthLabel}</span>
        <button type="button" style={navBtn} aria-label="Next month" onClick={() => setCursor(new Date(year, month + 1, 1))}>
          <i className="ph ph-caret-right" aria-hidden="true" />
        </button>
      </div>

      {/* Weekday header */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginBottom: 4 }}>
        {wd.map((w, i) => (
          <span key={i} style={{ textAlign: 'center', fontSize: 'var(--font-size-overline)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-tertiary)' }}>{w}</span>
        ))}
      </div>

      {/* Day grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const key = iso(d);
          const disabled = d < min;
          const active = key === selDate;
          const isToday = key === iso(today);
          return (
            <button key={i} type="button" disabled={disabled} onClick={() => emit({ date: key })}
              aria-pressed={active} aria-label={d.toLocaleDateString()}
              style={{
                height: 36, border: 'none', borderRadius: 'var(--radius-full)', cursor: disabled ? 'not-allowed' : 'pointer',
                background: active ? 'var(--color-brand-primary)' : 'transparent',
                color: active ? 'var(--color-text-on-brand)' : disabled ? 'var(--color-text-disabled)' : 'var(--color-text-primary)',
                fontSize: 'var(--font-size-body)', fontWeight: active || isToday ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                opacity: disabled ? 0.5 : 1, WebkitTapHighlightColor: 'transparent', position: 'relative',
                transition: 'var(--transition-colors)',
              }}>
              {d.getDate()}
              {isToday && !active && (
                <span aria-hidden="true" style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--color-brand-primary)' }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Time slots */}
      <div style={{ marginTop: 'var(--space-base)', paddingTop: 'var(--space-md)', borderTop: 'var(--border-width-default) solid var(--color-border-muted)' }}>
        <div style={{ fontSize: 'var(--font-size-overline)', letterSpacing: 'var(--letter-spacing-overline)', textTransform: 'uppercase', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-sm)' }}>Time</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {timeSlots.map((s) => {
            const slot = typeof s === 'string' ? { time: s, disabled: false } : s;
            const active = selTime === slot.time;
            return (
              <button key={slot.time} type="button" disabled={slot.disabled} onClick={() => emit({ time: slot.time })}
                style={{
                  minWidth: 60, height: 34, padding: '0 var(--space-sm)', borderRadius: 'var(--radius-full)',
                  border: active ? 'none' : 'var(--border-width-default) solid var(--color-border-default)',
                  background: active ? 'var(--color-brand-primary)' : 'var(--color-bg-main)',
                  color: active ? 'var(--color-text-on-brand)' : 'var(--color-text-primary)',
                  opacity: slot.disabled ? 'var(--state-disabled-opacity)' : 1, cursor: slot.disabled ? 'not-allowed' : 'pointer',
                  fontSize: 'var(--font-size-caption)', fontWeight: 'var(--font-weight-semibold)', WebkitTapHighlightColor: 'transparent',
                  transition: 'var(--transition-colors)',
                }}>{slot.time}</button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
