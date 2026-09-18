import React from 'react';

/**
 * AddressSelector — compact tappable field showing the current delivery
 * address with a pin icon and chevron, opening an address picker/sheet.
 */
export function AddressSelector({ label = 'Deliver to', address = 'Add an address', onClick = () => {} }) {
  return (
    <button type="button" onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', width: '100%', minHeight: 48,
      padding: '0 var(--space-md)', border: 'none', background: 'transparent', cursor: 'pointer',
      textAlign: 'left', fontFamily: 'var(--font-family-base)', WebkitTapHighlightColor: 'transparent',
    }}>
      <i className="ph-fill ph-map-pin" aria-hidden="true" style={{ fontSize: 'var(--icon-md)', color: 'var(--color-brand-primary)' }} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ display: 'block', fontSize: 'var(--font-size-overline)', letterSpacing: 'var(--letter-spacing-overline)', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', fontWeight: 'var(--font-weight-semibold)' }}>{label}</span>
        <span style={{ display: 'block', fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{address}</span>
      </span>
      <i className="ph ph-caret-down" aria-hidden="true" style={{ fontSize: 16, color: 'var(--color-text-tertiary)' }} />
    </button>
  );
}
