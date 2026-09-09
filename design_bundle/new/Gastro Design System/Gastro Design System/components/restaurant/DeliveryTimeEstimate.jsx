import React from 'react';

/**
 * DeliveryTimeEstimate — inline pill showing the estimated delivery/pickup
 * window with a clock icon. Neutral, informational — not a status.
 */
export function DeliveryTimeEstimate({ estimate = '25–35 min', icon = 'clock', tone = 'neutral' }) {
  const tones = {
    neutral: { bg: 'var(--color-bg-surface-sunken)', color: 'var(--color-text-secondary)' },
    brand: { bg: 'var(--color-brand-subtle)', color: 'var(--color-text-accent)' },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 'var(--radius-full)',
      background: t.bg, color: t.color, fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
    }}>
      <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 14 }} />{estimate}
    </span>
  );
}
