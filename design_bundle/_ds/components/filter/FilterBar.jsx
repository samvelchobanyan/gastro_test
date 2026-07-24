import React from 'react';

/**
 * FilterBar — horizontal pill toggle: icon on the left, label on the
 * right. Alternative to Filter (round icon-over-label) for denser filter
 * rows. Selected state fills with accent, same as Filter.
 */
export function FilterBar({ label = '', icon = 'fork-knife', selected = false, onClick = () => {} }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={selected} style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, height: 40,
      padding: '0 var(--space-md)', border: 'none', borderRadius: 'var(--radius-full)',
      background: selected ? 'var(--color-brand-primary)' : 'var(--color-bg-surface-sunken)',
      color: selected ? 'var(--color-text-on-brand)' : 'var(--color-text-secondary)',
      cursor: 'pointer', WebkitTapHighlightColor: 'transparent', fontFamily: 'var(--font-family-base)',
      transition: 'var(--transition-colors)',
    }}>
      <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 18 }} />
      <span style={{
        fontSize: 'var(--font-size-body)',
        fontWeight: selected ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
      }}>{label}</span>
    </button>
  );
}
