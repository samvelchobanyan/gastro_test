import React from 'react';

/**
 * MenuCategoryTabs — sticky horizontal tab strip for jumping between
 * menu sections (Starters, Mains, Desserts…). Sliding accent underline.
 */
export function MenuCategoryTabs({ categories = [], activeKey = null, onChange = () => {} }) {
  return (
    <div role="tablist" aria-label="Menu categories" style={{
      display: 'flex', gap: 'var(--space-lg)', overflowX: 'auto',
      borderBottom: 'var(--border-width-default) solid var(--color-border-muted)',
      fontFamily: 'var(--font-family-base)',
    }}>
      {categories.map((c) => {
        const key = typeof c === 'string' ? c : c.key;
        const label = typeof c === 'string' ? c : c.label;
        const active = key === activeKey;
        return (
          <button key={key} type="button" role="tab" aria-selected={active} onClick={() => onChange(key)} style={{
            flex: '0 0 auto', border: 'none', background: 'transparent', cursor: 'pointer',
            padding: 'var(--space-md) 2px', WebkitTapHighlightColor: 'transparent',
            fontSize: 'var(--font-size-body-lg)', fontWeight: active ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
            color: active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
            borderBottom: active ? '2px solid var(--color-brand-primary)' : '2px solid transparent',
            marginBottom: -1, transition: 'color var(--duration-base) var(--ease-standard)', whiteSpace: 'nowrap',
          }}>{label}</button>
        );
      })}
    </div>
  );
}
