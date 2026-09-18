import React from 'react';

/**
 * TimePicker — chip grid of available time slots (reservations, pickup
 * scheduling). Disabled slots represent unavailable times.
 */
export function TimePicker({ slots = [], value = null, onChange = () => {}, label = 'Time' }) {
  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      {label && (
        <div style={{ marginBottom: 'var(--space-sm)', fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-medium)', color: 'var(--input-label)' }}>{label}</div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {slots.map((s) => {
          const time = typeof s === 'string' ? { time: s, disabled: false } : s;
          const active = value === time.time;
          return (
            <button key={time.time} type="button" disabled={time.disabled}
              onClick={() => onChange(time.time)}
              style={{
                minWidth: 72, height: 40, padding: '0 var(--space-md)', border: active ? 'none' : 'var(--border-width-default) solid var(--color-border-default)',
                borderRadius: 'var(--radius-full)', background: active ? 'var(--color-brand-primary)' : 'var(--color-bg-main)',
                color: active ? 'var(--color-text-on-brand)' : 'var(--color-text-primary)',
                opacity: time.disabled ? 'var(--state-disabled-opacity)' : 1,
                cursor: time.disabled ? 'not-allowed' : 'pointer', fontSize: 'var(--font-size-body)',
                fontWeight: 'var(--font-weight-semibold)', WebkitTapHighlightColor: 'transparent',
                transition: 'var(--transition-colors)',
              }}>{time.time}</button>
          );
        })}
      </div>
    </div>
  );
}
