import React from 'react';

/**
 * AdvancedListItem — single row: optional leading icon/avatar, title,
 * subtitle, and trailing element (value, chevron, control). Row heights
 * follow the spec (48 / 56 / 72 / 88). For a bare label + arrow, use
 * SimpleListItem instead.
 */
export function AdvancedListItem({
  title = '',
  subtitle = null,
  leadingIcon = null,      // phosphor name
  leadingAvatar = null,    // node (e.g. <Avatar/>)
  trailing = null,         // node
  chevron = false,
  onClick = null,
  disabled = false,
}) {
  const [pressed, setPressed] = React.useState(false);
  const interactive = Boolean(onClick);
  const twoLine = Boolean(subtitle);

  const row = {
    display: 'flex', alignItems: 'center', gap: 'var(--space-md)', width: '100%',
    minHeight: twoLine ? 72 : 56, padding: 'var(--space-md) var(--space-base)', boxSizing: 'border-box',
    background: pressed ? 'var(--overlay-hover-dark)' : 'transparent',
    border: 'none', textAlign: 'left', fontFamily: 'var(--font-family-base)',
    cursor: interactive && !disabled ? 'pointer' : 'default',
    opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
    WebkitTapHighlightColor: 'transparent', transition: 'background-color var(--duration-fast) var(--ease-standard)',
  };
  const clear = () => setPressed(false);
  const Tag = interactive ? 'button' : 'div';

  return (
    <Tag
      type={interactive ? 'button' : undefined} style={row} onClick={disabled ? undefined : onClick}
      disabled={interactive ? disabled : undefined}
      onPointerDown={() => interactive && !disabled && setPressed(true)} onPointerUp={clear} onPointerLeave={clear}
    >
      {leadingAvatar}
      {!leadingAvatar && leadingIcon && (
        <span style={{
          flex: '0 0 auto', width: 40, height: 40, display: 'inline-flex', alignItems: 'center',
          justifyContent: 'center', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-surface-sunken)',
          color: 'var(--color-text-secondary)', fontSize: 'var(--icon-sm)',
        }}><i className={`ph ph-${leadingIcon}`} aria-hidden="true" /></span>
      )}
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{
          display: 'block', fontSize: 'var(--font-size-body-lg)', lineHeight: 'var(--line-height-body-lg)',
          fontWeight: 'var(--font-weight-medium)', color: 'var(--color-text-primary)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{title}</span>
        {subtitle && (
          <span style={{
            display: 'block', fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)',
            color: 'var(--color-text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{subtitle}</span>
        )}
      </span>
      {trailing && <span style={{ flex: '0 0 auto', color: 'var(--color-text-secondary)' }}>{trailing}</span>}
      {chevron && <i className="ph ph-caret-right" aria-hidden="true" style={{ flex: '0 0 auto', fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)' }} />}
    </Tag>
  );
}
