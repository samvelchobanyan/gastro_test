import React from 'react';

/**
 * OrderTotalBreakdown — itemized price summary (subtotal, delivery, fees,
 * discount, tax, total). Total row is visually emphasized.
 */
export function OrderTotalBreakdown({
  subtotal = 0,
  deliveryFee = 0,
  serviceFee = 0,
  discount = 0,
  tax = 0,
}) {
  const total = subtotal + deliveryFee + serviceFee + tax - discount;
  const row = (label, value, opts = {}) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
      <span style={{ fontSize: 'var(--font-size-body)', color: opts.muted ? 'var(--color-text-tertiary)' : 'var(--color-text-secondary)' }}>{label}</span>
      <span style={{
        fontSize: 'var(--font-size-body)', fontVariantNumeric: 'tabular-nums',
        color: opts.negative ? 'var(--color-status-success)' : 'var(--color-text-primary)',
      }}>{opts.negative ? '−' : ''}${Math.abs(value).toFixed(2)}</span>
    </div>
  );

  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      {row('Subtotal', subtotal)}
      {row(deliveryFee ? 'Delivery fee' : 'Delivery', deliveryFee, { muted: deliveryFee === 0 })}
      {serviceFee > 0 && row('Service fee', serviceFee)}
      {discount > 0 && row('Discount', discount, { negative: true })}
      {row('Tax', tax, { muted: true })}
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-sm)',
        paddingTop: 'var(--space-md)', borderTop: 'var(--border-width-default) solid var(--color-border-muted)',
      }}>
        <span style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>Total</span>
        <span style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-primary)', fontVariantNumeric: 'tabular-nums' }}>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
