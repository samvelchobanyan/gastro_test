import React from 'react';

/**
 * Badge — small numeric or status indicator. Use `dot` for presence, a
 * number for counts (e.g. cart), or `standalone` inline pill. Counts clamp
 * at `max` (default 99 -> "99+").
 */
export function Badge({
  count = null,
  dot = false,
  max = 99,
  tone = 'error',      // 'error' | 'brand' | 'success' | 'neutral'
  children = null,     // element to overlay onto (optional)
}) {
  const tones = {
    error: { bg: 'var(--color-status-error)', color: 'var(--color-text-on-brand)' },
    brand: { bg: 'var(--color-brand-primary)', color: 'var(--color-text-on-brand)' },
    success: { bg: 'var(--color-status-success)', color: 'var(--color-text-on-brand)' },
    neutral: { bg: 'var(--gray-700)', color: 'var(--color-text-inverse)' },
  };
  const t = tones[tone] || tones.error;
  const label = count != null && count > max ? `${max}+` : count;

  const pill = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    minWidth: dot ? 10 : 18, height: dot ? 10 : 18, padding: dot ? 0 : '0 5px',
    boxSizing: 'border-box', background: t.bg, color: t.color,
    borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-family-base)',
    fontSize: 11, fontWeight: 'var(--font-weight-bold)', lineHeight: 1,
    fontVariantNumeric: 'tabular-nums',
  };

  if (!children) return <span style={pill} aria-label={dot ? 'New' : String(label)}>{!dot && label}</span>;

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      <span style={{ ...pill, position: 'absolute', top: -4, right: -4, border: '2px solid var(--color-bg-main)' }}>
        {!dot && label}
      </span>
    </span>
  );
}
