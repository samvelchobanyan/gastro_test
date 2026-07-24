import React from 'react';

/**
 * Tag — static compact label for categories or attributes. Not
 * interactive. For a selectable/removable toggle, use Chip instead.
 */
export function Tag({
  label = '',
  icon = null,         // phosphor name
  tone = 'neutral',    // 'neutral' | 'brand' | 'success' | 'warning' | 'error'
  size = 'md',         // 'sm' 24 | 'md' 32
}) {
  const h = size === 'sm' ? 24 : 32;
  const tones = {
    neutral: { bg: 'var(--chip-bg)', color: 'var(--chip-text)' },
    brand: { bg: 'var(--color-brand-subtle)', color: 'var(--color-text-accent)' },
    success: { bg: 'var(--color-bg-success)', color: 'var(--color-text-success)' },
    warning: { bg: 'var(--color-bg-warning)', color: 'var(--color-text-warning)' },
    error: { bg: 'var(--color-bg-error)', color: 'var(--color-text-error)' },
  };
  const t = tones[tone] || tones.neutral;

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, height: h,
      padding: `0 ${size === 'sm' ? 10 : 12}px`, boxSizing: 'border-box',
      background: t.bg, color: t.color, border: 'none', borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-family-base)', fontSize: size === 'sm' ? 12 : 'var(--font-size-body)',
      fontWeight: 'var(--font-weight-semibold)', whiteSpace: 'nowrap',
    }}>
      {icon && <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 16 }} />}
      {label}
    </span>
  );
}
