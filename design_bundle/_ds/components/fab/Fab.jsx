import React from 'react';

/**
 * Fab — Floating Action Button. Circular, elevated, anchored to a screen
 * edge for a single key persistent action (e.g. view cart, new order).
 * Supports an optional label (extended FAB).
 */
export function Fab({
  icon = 'plus',
  label = null,        // when set, renders an extended (pill) FAB
  size = 'md',         // 'md' 56 | 'lg' 64
  disabled = false,
  onClick = () => {},
  ariaLabel = 'Action',
}) {
  const [pressed, setPressed] = React.useState(false);
  const dim = size === 'lg' ? 64 : 56;
  const extended = Boolean(label);

  const style = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 'var(--space-sm)',
    height: dim, width: extended ? 'auto' : dim,
    padding: extended ? '0 var(--space-lg)' : 0,
    border: 'none',
    background: pressed ? 'var(--fab-bg-active)' : 'var(--fab-bg)',
    color: 'var(--fab-icon)',
    borderRadius: 'var(--radius-full)',
    boxShadow: 'var(--elevation-raised)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    transition: 'var(--transition-press)', WebkitTapHighlightColor: 'transparent',
  };
  const clear = () => setPressed(false);

  return (
    <button
      type="button" style={style} disabled={disabled} onClick={onClick}
      aria-label={extended ? undefined : ariaLabel}
      onPointerDown={() => !disabled && setPressed(true)}
      onPointerUp={clear} onPointerLeave={clear}
    >
      <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 'var(--icon-lg)' }} />
      {extended && <span>{label}</span>}
    </button>
  );
}
