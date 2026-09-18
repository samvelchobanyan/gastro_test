import React from 'react';

/**
 * Accordion — collapsible section revealing content on tap. Manages a list
 * of items; single-open by default, or `allowMultiple`.
 */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = [] }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));

  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };

  return (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderBottom: 'var(--border-width-default) solid var(--color-border-muted)' }}>
            <button type="button" onClick={() => toggle(i)} aria-expanded={isOpen} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-md)',
              width: '100%', minHeight: 56, padding: 'var(--space-md) 0', border: 'none', background: 'transparent',
              cursor: 'pointer', textAlign: 'left', color: 'var(--color-text-primary)',
              fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)', WebkitTapHighlightColor: 'transparent',
            }}>
              <span>{it.title}</span>
              <i className="ph ph-caret-down" aria-hidden="true" style={{
                fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)', flex: '0 0 auto',
                transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-standard)',
              }} />
            </button>
            <div style={{
              overflow: 'hidden', maxHeight: isOpen ? 400 : 0,
              transition: 'max-height var(--duration-slow) var(--ease-standard)',
            }}>
              <div style={{ paddingBottom: 'var(--space-base)', fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)', color: 'var(--color-text-secondary)' }}>
                {it.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
