import React from 'react';

/**
 * Filter — round icon + label toggle for filter rows on discovery/search
 * screens (cuisine, category, dietary…). Selected state fills with accent.
 */
export function Filter({ label = '', icon = 'fork-knife', selected = false, onClick = () => {} }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={selected} style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6,
      border: 'none', background: 'transparent', cursor: 'pointer', padding: 4, width: 64,
      WebkitTapHighlightColor: 'transparent', fontFamily: 'var(--font-family-base)',
    }}>
      <span style={{
        width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-full)', fontSize: 22,
        background: selected ? 'var(--color-brand-primary)' : 'var(--color-bg-surface-sunken)',
        color: selected ? 'var(--color-text-on-brand)' : 'var(--color-text-secondary)',
        transition: 'var(--transition-colors)',
      }}><i className={`ph ph-${icon}`} aria-hidden="true" /></span>
      <span style={{
        fontSize: 'var(--font-size-caption)', fontWeight: selected ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
        color: selected ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)', textAlign: 'center',
      }}>{label}</span>
    </button>
  );
}
