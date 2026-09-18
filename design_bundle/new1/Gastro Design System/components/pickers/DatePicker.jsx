import React from 'react';

/**
 * DatePicker — compact field opening a horizontal day-scroller for
 * near-term dates (reservations, scheduled orders). Not a full calendar.
 */
export function DatePicker({ value = null, onChange = () => {}, daysAhead = 14, label = 'Date' }) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = Array.from({ length: daysAhead }, (_, i) => {
    const d = new Date(today); d.setDate(d.getDate() + i); return d;
  });
  const fmt = (d) => d.toISOString().slice(0, 10);
  const selected = value || fmt(days[0]);

  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      {label && (
        <div style={{ marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-medium)', color: 'var(--input-label)' }}>{label}</div>
      )}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
        {days.map((d) => {
          const key = fmt(d);
          const active = key === selected;
          const isToday = key === fmt(today);
          return (
            <button key={key} type="button" onClick={() => onChange(key)} style={{
              flex: '0 0 auto', width: 52, height: 64, display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 2, border: active ? 'none' : 'var(--border-width-default) solid var(--color-border-default)',
              borderRadius: 'var(--radius-md)', background: active ? 'var(--color-brand-primary)' : 'var(--color-bg-main)',
              color: active ? 'var(--color-text-on-brand)' : 'var(--color-text-primary)', cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent', transition: 'var(--transition-colors)',
            }}>
              <span style={{ fontSize: 11, fontWeight: 'var(--font-weight-semibold)', opacity: 0.8, textTransform: 'uppercase' }}>
                {isToday ? 'Today' : d.toLocaleDateString(undefined, { weekday: 'short' })}
              </span>
              <span style={{ fontSize: 18, fontWeight: 'var(--font-weight-bold)' }}>{d.getDate()}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
