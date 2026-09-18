import React from 'react';
import { Stepper } from '../forms/Stepper.jsx';

/**
 * CartLineItem — single row in the cart/order list: thumbnail, name,
 * modifiers summary, price, and a quantity Stepper (or read-only qty for
 * order history).
 */
export function CartLineItem({
  image = null,
  name = '',
  modifiers = null,     // e.g. "Large, extra cheese"
  price = 0,
  qty = 1,
  onQtyChange = null,   // null => read-only display
  onRemove = null,
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-md) 0',
      fontFamily: 'var(--font-family-base)',
    }}>
      <div style={{
        width: 56, height: 56, flex: '0 0 auto', borderRadius: 'var(--radius-sm)', overflow: 'hidden',
        background: image ? `center/cover no-repeat url("${image}")` : 'var(--color-bg-surface-sunken)',
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</div>
        {modifiers && <div style={{ fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{modifiers}</div>}
        <div style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>
          ${(price * qty).toFixed(2)}
        </div>
      </div>
      <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
        {onQtyChange ? (
          <Stepper size="sm" value={qty} min={0} onChange={onQtyChange} />
        ) : (
          <span style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-tertiary)' }}>×{qty}</span>
        )}
        {onRemove && (
          <button type="button" onClick={onRemove} aria-label="Remove item" style={{
            border: 'none', background: 'transparent', color: 'var(--color-text-tertiary)', fontSize: 12, cursor: 'pointer', padding: 0,
          }}>Remove</button>
        )}
      </div>
    </div>
  );
}
