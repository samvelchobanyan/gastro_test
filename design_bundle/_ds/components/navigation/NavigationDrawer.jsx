import React from 'react';

/**
 * NavigationDrawer — slide-out panel from the left for secondary /
 * account-level navigation. Includes a scrim; closes on scrim tap.
 */
export function NavigationDrawer({
  open = false,
  onClose = () => {},
  header = null,
  items = [],          // [{ icon, label, key, active }]
  onSelect = () => {},
  footer = null,
}) {
  return (
    <div aria-hidden={!open} style={{ position: 'absolute', inset: 0, pointerEvents: open ? 'auto' : 'none', zIndex: 40 }}>
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0, background: 'var(--color-bg-scrim)',
          opacity: open ? 1 : 0, transition: 'opacity var(--duration-base) var(--ease-standard)',
        }}
      />
      <aside
        role="dialog" aria-label="Navigation"
        style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: 296, maxWidth: '85%',
          background: 'var(--color-bg-main)', boxShadow: 'var(--elevation-overlay)',
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform var(--duration-slow) var(--ease-decelerate)',
          display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-family-base)',
          padding: 'var(--space-base)', boxSizing: 'border-box',
        }}
      >
        {header && <div style={{ padding: 'var(--space-sm) var(--space-sm) var(--space-base)' }}>{header}</div>}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {items.map((it) => (
            <button
              key={it.key} type="button" onClick={() => onSelect(it.key)}
              aria-current={it.active ? 'page' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 'var(--space-md)', minHeight: 48,
                padding: '0 var(--space-md)', border: 'none', borderRadius: 'var(--radius-md)',
                background: it.active ? 'var(--color-brand-subtle)' : 'transparent',
                color: it.active ? 'var(--color-text-accent)' : 'var(--color-text-primary)',
                fontSize: 'var(--font-size-body-lg)', fontWeight: it.active ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                cursor: 'pointer', textAlign: 'left', WebkitTapHighlightColor: 'transparent',
              }}
            >
              <i className={`${it.active ? 'ph-fill' : 'ph'} ph-${it.icon}`} aria-hidden="true" style={{ fontSize: 'var(--icon-md)' }} />
              {it.label}
            </button>
          ))}
        </nav>
        {footer && <div style={{ paddingTop: 'var(--space-base)', borderTop: 'var(--border-width-default) solid var(--color-border-muted)' }}>{footer}</div>}
      </aside>
    </div>
  );
}
