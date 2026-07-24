import React from 'react';

/**
 * BottomTabBar — persistent bottom navigation between core sections.
 * 56px (no labels) to 64px (labeled). Active item uses accent + filled icon.
 */
export function BottomTabBar({
  items = [],          // [{ key, icon, label, badge }]
  activeKey = null,
  onChange = () => {},
  showLabels = true,
}) {
  const bar = {
    display: 'flex', alignItems: 'stretch',
    height: showLabels ? 'var(--bottomnav-height-labeled)' : 'var(--bottomnav-height)',
    background: 'var(--bottomnav-bg)',
    borderTop: 'var(--border-width-default) solid var(--appbar-border)',
    paddingBottom: 'env(safe-area-inset-bottom, 0px)',
    fontFamily: 'var(--font-family-base)',
  };

  return (
    <nav style={bar} aria-label="Primary">
      {items.map((it) => {
        const active = it.key === activeKey;
        return (
          <button
            key={it.key} type="button" onClick={() => onChange(it.key)}
            aria-current={active ? 'page' : undefined}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 2, border: 'none', background: 'transparent',
              color: active ? 'var(--bottomnav-icon-active)' : 'var(--bottomnav-icon)',
              cursor: 'pointer', padding: '6px 0', WebkitTapHighlightColor: 'transparent',
              transition: 'color var(--duration-fast) var(--ease-standard)',
            }}
          >
            <span style={{ position: 'relative', display: 'inline-flex' }}>
              <i className={`${active ? 'ph-fill' : 'ph'} ph-${it.icon}`} aria-hidden="true" style={{ fontSize: 'var(--icon-md)' }} />
              {it.badge != null && (
                <span style={{
                  position: 'absolute', top: -4, right: -8, minWidth: 16, height: 16, padding: '0 4px',
                  boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--badge-bg)', color: 'var(--badge-text)', borderRadius: 'var(--radius-full)',
                  fontSize: 10, fontWeight: 'var(--font-weight-bold)', lineHeight: 1,
                }}>{it.badge}</span>
              )}
            </span>
            {showLabels && (
              <span style={{
                fontSize: 'var(--font-size-overline)', lineHeight: 'var(--line-height-overline)',
                fontWeight: active ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
              }}>{it.label}</span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
