import React from 'react';

/**
 * ReorderButton — compact secondary action to repeat a past order.
 * Meant as a trailing action inside OrderHistoryCard or similar rows.
 */
export function ReorderButton({ onClick = () => {}, label = 'Reorder' }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button type="button" onClick={onClick}
      onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, height: 36, padding: '0 var(--space-md)',
        borderRadius: 'var(--radius-full)', border: 'var(--border-width-default) solid var(--color-border-default)',
        background: pressed ? 'var(--color-bg-surface-sunken)' : 'transparent', color: 'var(--color-text-primary)',
        fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)',
        cursor: 'pointer', transition: 'var(--transition-press)', WebkitTapHighlightColor: 'transparent',
      }}>
      <i className="ph ph-arrow-clockwise" aria-hidden="true" style={{ fontSize: 16 }} />{label}
    </button>
  );
}
