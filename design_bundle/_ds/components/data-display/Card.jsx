import React from 'react';

/**
 * Card — generic container grouping related content with consistent
 * padding, radius and subtle elevation. Optional press behavior.
 */
export function Card({
  children,
  padding = 'base',    // 'none' | 'sm' | 'base' | 'lg'
  interactive = false,
  onClick = null,
  elevated = true,
  style = {},
}) {
  const [pressed, setPressed] = React.useState(false);
  const pads = { none: 0, sm: 'var(--space-md)', base: 'var(--space-base)', lg: 'var(--space-lg)' };

  const base = {
    background: 'var(--card-bg)',
    border: 'var(--border-width-default) solid var(--card-border)',
    borderRadius: 'var(--radius-card)',
    boxShadow: elevated ? 'var(--elevation-card)' : 'none',
    padding: pads[padding], boxSizing: 'border-box',
    fontFamily: 'var(--font-family-base)', color: 'var(--color-text-primary)',
    transition: 'var(--transition-press)',
    ...(interactive ? {
      cursor: 'pointer', WebkitTapHighlightColor: 'transparent',
      transform: pressed ? 'scale(var(--press-scale))' : 'none',
    } : {}),
    ...style,
  };

  const handlers = interactive ? {
    onClick, role: 'button', tabIndex: 0,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
  } : {};

  return <div style={base} {...handlers}>{children}</div>;
}
