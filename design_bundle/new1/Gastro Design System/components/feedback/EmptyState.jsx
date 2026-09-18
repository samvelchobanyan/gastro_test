import React from 'react';

/**
 * EmptyState — icon/message shown when a list or section has no content.
 * Optional primary action.
 */
export function EmptyState({
  icon = 'tray',
  title = 'Nothing here yet',
  description = null,
  actionLabel = null,
  onAction = () => {},
}) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      padding: 'var(--space-xxl) var(--space-lg)', fontFamily: 'var(--font-family-base)',
    }}>
      <div style={{
        width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-full)', background: 'var(--color-bg-surface-sunken)',
        color: 'var(--color-text-tertiary)', fontSize: 36, marginBottom: 'var(--space-base)',
      }}><i className={`ph ph-${icon}`} aria-hidden="true" /></div>
      <h3 style={{ margin: 0, fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{title}</h3>
      {description && <p style={{ margin: 'var(--space-sm) 0 0', maxWidth: 260, fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)', color: 'var(--color-text-tertiary)' }}>{description}</p>}
      {actionLabel && (
        <button type="button" onClick={onAction}
          onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
          style={{
            marginTop: 'var(--space-lg)', height: 48, padding: '0 var(--space-lg)', border: 'none', borderRadius: 'var(--radius-md)',
            background: pressed ? 'var(--button-primary-bg-active)' : 'var(--button-primary-bg)', color: 'var(--button-primary-text)',
            fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)',
            cursor: 'pointer', transition: 'var(--transition-press)',
          }}>{actionLabel}</button>
      )}
    </div>
  );
}
