import React from 'react';

/**
 * PaymentMethodCard — single payment method row (card, wallet) with brand
 * icon, masked number and a selected/radio indicator. Use inside
 * PaymentMethodPicker or standalone in a settings list.
 */
export function PaymentMethodCard({
  type = 'card',        // 'card' | 'apple-pay' | 'google-pay' | 'cash'
  last4 = null,
  label = null,
  selected = false,
  onClick = () => {},
}) {
  const icons = { card: 'credit-card', 'apple-pay': 'apple-logo', 'google-pay': 'google-logo', cash: 'money' };
  const title = label || (last4 ? `•••• ${last4}` : type === 'apple-pay' ? 'Apple Pay' : type === 'google-pay' ? 'Google Pay' : 'Cash');

  return (
    <button type="button" onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-md)', width: '100%', minHeight: 56,
      padding: '0 var(--space-md)', border: `var(--border-width-default) solid ${selected ? 'var(--color-brand-primary)' : 'var(--color-border-default)'}`,
      borderRadius: 'var(--radius-md)', background: selected ? 'var(--color-brand-subtle)' : 'var(--color-bg-main)',
      cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-family-base)', WebkitTapHighlightColor: 'transparent',
      transition: 'var(--transition-colors)',
    }}>
      <span style={{
        width: 40, height: 28, borderRadius: 'var(--radius-xs)', background: 'var(--color-bg-surface-sunken)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-secondary)', flex: '0 0 auto',
      }}><i className={`ph ph-${icons[type] || 'credit-card'}`} aria-hidden="true" style={{ fontSize: 18 }} /></span>
      <span style={{ flex: 1, fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)' }}>{title}</span>
      <span aria-hidden="true" style={{
        width: 20, height: 20, borderRadius: '50%', flex: '0 0 auto',
        border: `2px solid ${selected ? 'var(--color-brand-primary)' : 'var(--color-border-strong)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{selected && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-brand-primary)' }} />}</span>
    </button>
  );
}
