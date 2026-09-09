import React from 'react';

/**
 * CartSummaryBar — persistent bottom bar showing item count + total,
 * tappable to open the full cart. Sits above the bottom tab bar or
 * screen edge; elevated like a FAB.
 */
export function CartSummaryBar({ itemCount = 0, total = 0, onOpen = () => {} }) {
  if (itemCount <= 0) return null;
  const [pressed, setPressed] = React.useState(false);
  return (
    <button type="button" onClick={onOpen}
      onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
        minHeight: 56, padding: '0 var(--space-base)', boxSizing: 'border-box', border: 'none',
        borderRadius: 'var(--radius-md)', cursor: 'pointer', fontFamily: 'var(--font-family-base)',
        background: pressed ? 'var(--button-primary-bg-active)' : 'var(--button-primary-bg)',
        color: 'var(--button-primary-text)', boxShadow: 'var(--elevation-raised)',
        transition: 'var(--transition-press)', WebkitTapHighlightColor: 'transparent',
      }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24,
          borderRadius: 'var(--radius-full)', background: 'var(--alpha-white-24)', fontSize: 12, fontWeight: 'var(--font-weight-bold)',
        }}>{itemCount}</span>
        <i className="ph ph-shopping-cart-simple" aria-hidden="true" style={{ fontSize: 'var(--icon-md)' }} />
        <span style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)' }}>View cart</span>
      </span>
      <span style={{ fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-bold)', fontVariantNumeric: 'tabular-nums' }}>
        ${total.toFixed(2)}
      </span>
    </button>
  );
}
