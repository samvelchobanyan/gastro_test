import React from 'react';

/**
 * OrderStatusTimeline — vertical stepper showing order progress
 * (Placed → Preparing → Out for delivery → Delivered). Completed steps
 * fill with accent + check; current step pulses.
 */
export function OrderStatusTimeline({ steps = [], currentIndex = 0 }) {
  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      {steps.map((s, i) => {
        const done = i < currentIndex;
        const active = i === currentIndex;
        const last = i === steps.length - 1;
        return (
          <div key={i} style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{
                width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: done || active ? 'var(--color-brand-primary)' : 'var(--color-bg-surface-sunken)',
                color: done || active ? 'var(--color-text-on-brand)' : 'var(--color-text-tertiary)',
                boxShadow: active ? '0 0 0 4px var(--accent-100)' : 'none', flex: '0 0 auto',
              }}>
                {done ? <i className="ph-bold ph-check" aria-hidden="true" style={{ fontSize: 14 }} /> : <i className={`ph ph-${s.icon || 'circle'}`} aria-hidden="true" style={{ fontSize: 14 }} />}
              </span>
              {!last && <span style={{ width: 2, flex: 1, minHeight: 28, background: done ? 'var(--color-brand-primary)' : 'var(--color-border-muted)' }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : 'var(--space-lg)' }}>
              <div style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: active ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)', color: done || active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)' }}>{s.label}</div>
              {s.time && <div style={{ fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)' }}>{s.time}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
