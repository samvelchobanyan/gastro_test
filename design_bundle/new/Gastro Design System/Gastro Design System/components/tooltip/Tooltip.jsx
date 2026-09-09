import React from 'react';

/**
 * Tooltip — small contextual hint shown on tap/hover of its trigger.
 * Wraps a child trigger; positions above or below.
 */
export function Tooltip({ content = '', placement = 'top', children }) {
  const [open, setOpen] = React.useState(false);
  const above = placement === 'top';

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      <span role="tooltip" style={{
        position: 'absolute', left: '50%', transform: `translateX(-50%) translateY(${open ? '0' : above ? '4px' : '-4px'})`,
        [above ? 'bottom' : 'top']: 'calc(100% + 8px)', zIndex: 80,
        background: 'var(--tooltip-bg)', color: 'var(--tooltip-text)',
        padding: '6px 10px', borderRadius: 'var(--radius-tooltip)', whiteSpace: 'nowrap',
        fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-caption)', lineHeight: 'var(--line-height-caption)',
        boxShadow: 'var(--elevation-overlay)', pointerEvents: 'none',
        opacity: open ? 1 : 0, transition: 'opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      }}>{content}</span>
    </span>
  );
}
