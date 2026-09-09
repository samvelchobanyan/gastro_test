import React from 'react';

/**
 * QuickActionTile — square tile with a centered icon and a label below,
 * for a row of shortcut actions (Rate, History, Favourites…).
 */
export function QuickActionTile({ icon = 'star', label = '', onClick = () => {} }) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <button type="button" onClick={onClick}
      onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-sm)',
        flex: 1, aspectRatio: '1 / 1', border: 'none', borderRadius: 'var(--radius-card)',
        background: 'var(--card-bg)', boxShadow: 'var(--elevation-card)', cursor: 'pointer',
        fontFamily: 'var(--font-family-base)', WebkitTapHighlightColor: 'transparent',
        transform: pressed ? 'scale(var(--press-scale))' : 'none', transition: 'var(--transition-press)',
      }}>
      <i className={`ph ph-${icon}`} aria-hidden="true" style={{ fontSize: 28, color: 'var(--color-brand-primary)' }} />
      <span style={{
        fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)',
      }}>{label}</span>
    </button>
  );
}

/**
 * QuickActionTiles — row of QuickActionTile shortcuts, evenly spaced.
 */
export function QuickActionTiles({ actions = [] }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
      {actions.map((a) => (
        <QuickActionTile key={a.key || a.label} icon={a.icon} label={a.label} onClick={a.onClick} />
      ))}
    </div>
  );
}
