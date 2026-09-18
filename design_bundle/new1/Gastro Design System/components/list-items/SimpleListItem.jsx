import React from 'react';

/**
 * SimpleListItem — minimal navigational row: a text label and a
 * right-pointing chevron. For rows needing icons, subtitles or trailing
 * values, use AdvancedListItem.
 */
export function SimpleListItem({ label = '', onClick = null, disabled = false }) {
  const [pressed, setPressed] = React.useState(false);
  const interactive = Boolean(onClick);
  const clear = () => setPressed(false);
  const Tag = interactive ? 'button' : 'div';

  return (
    <Tag
      type={interactive ? 'button' : undefined}
      onClick={disabled ? undefined : onClick}
      disabled={interactive ? disabled : undefined}
      onPointerDown={() => interactive && !disabled && setPressed(true)}
      onPointerUp={clear} onPointerLeave={clear}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-md)', width: '100%',
        minHeight: 56, padding: 'var(--space-md) var(--space-base)', boxSizing: 'border-box',
        background: pressed ? 'var(--overlay-hover-dark)' : 'transparent', border: 'none', textAlign: 'left',
        fontFamily: 'var(--font-family-base)', cursor: interactive && !disabled ? 'pointer' : 'default',
        opacity: disabled ? 'var(--state-disabled-opacity)' : 1, WebkitTapHighlightColor: 'transparent',
        transition: 'background-color var(--duration-fast) var(--ease-standard)',
      }}
    >
      <span style={{
        flex: 1, minWidth: 0, fontSize: 'var(--font-size-body-lg)', lineHeight: 'var(--line-height-body-lg)',
        fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>{label}</span>
      <i className="ph ph-caret-right" aria-hidden="true" style={{ flex: '0 0 auto', fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)' }} />
    </Tag>
  );
}
