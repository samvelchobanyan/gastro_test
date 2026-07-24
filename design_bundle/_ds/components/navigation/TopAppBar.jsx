import React from 'react';

/**
 * TopAppBar — screen header with title, optional back button and trailing
 * action icons (search, cart, notifications). 56px tall (Android standard).
 */
export function TopAppBar({
  title = '',
  subtitle = null,
  onBack = null,
  actions = [],        // [{ icon, onClick, ariaLabel, badge }]
  centerTitle = false,
  elevated = false,
}) {
  const bar = {
    display: 'flex', alignItems: 'center', gap: 'var(--space-sm)',
    height: 'var(--appbar-height)', padding: '0 var(--space-sm)',
    background: 'var(--appbar-bg)',
    borderBottom: elevated ? 'none' : 'var(--border-width-default) solid var(--appbar-border)',
    boxShadow: elevated ? 'var(--elevation-card)' : 'none',
    fontFamily: 'var(--font-family-base)',
  };
  const iconBtn = {
    width: 48, height: 48, flex: '0 0 auto', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', border: 'none',
    background: 'transparent', color: 'var(--color-text-primary)',
    borderRadius: 'var(--radius-full)', cursor: 'pointer', fontSize: 'var(--icon-md)',
    position: 'relative', WebkitTapHighlightColor: 'transparent',
  };

  return (
    <header style={bar}>
      {onBack && (
        <button type="button" style={iconBtn} onClick={onBack} aria-label="Back">
          <i className="ph ph-arrow-left" aria-hidden="true" />
        </button>
      )}
      <div style={{
        flex: 1, minWidth: 0, paddingLeft: onBack ? 0 : 'var(--space-sm)',
        textAlign: centerTitle ? 'center' : 'left',
      }}>
        <div style={{
          fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)',
          fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{title}</div>
        {subtitle && (
          <div style={{
            fontSize: 'var(--font-size-caption)', lineHeight: 'var(--line-height-caption)',
            color: 'var(--color-text-tertiary)',
          }}>{subtitle}</div>
        )}
      </div>
      {actions.map((a, i) => (
        <button key={i} type="button" style={iconBtn} onClick={a.onClick} aria-label={a.ariaLabel}>
          <i className={`ph ph-${a.icon}`} aria-hidden="true" />
          {a.badge != null && (
            <span style={{
              position: 'absolute', top: 6, right: 6, minWidth: 16, height: 16, padding: '0 4px',
              boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--badge-bg)', color: 'var(--badge-text)', borderRadius: 'var(--radius-full)',
              fontSize: 10, fontWeight: 'var(--font-weight-bold)', lineHeight: 1,
            }}>{a.badge}</span>
          )}
        </button>
      ))}
    </header>
  );
}
