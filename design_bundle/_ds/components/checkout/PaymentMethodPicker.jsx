import React from 'react';
import { PaymentMethodCard } from './PaymentMethodCard.jsx';

/**
 * PaymentMethodPicker — vertical list of PaymentMethodCards with an
 * "Add payment method" action. Manages the selected id.
 */
export function PaymentMethodPicker({ methods = [], selectedId = null, onSelect = () => {}, onAddNew = () => {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', fontFamily: 'var(--font-family-base)' }}>
      {methods.map((m) => (
        <PaymentMethodCard key={m.id} type={m.type} last4={m.last4} label={m.label} selected={m.id === selectedId} onClick={() => onSelect(m.id)} />
      ))}
      <button type="button" onClick={onAddNew} style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minHeight: 56, padding: '0 var(--space-md)',
        border: 'var(--border-width-default) dashed var(--color-border-default)', borderRadius: 'var(--radius-md)',
        background: 'transparent', color: 'var(--color-text-accent)', cursor: 'pointer', textAlign: 'left',
        fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)', WebkitTapHighlightColor: 'transparent',
      }}>
        <i className="ph ph-plus-circle" aria-hidden="true" style={{ fontSize: 20 }} />Add payment method
      </button>
    </div>
  );
}
