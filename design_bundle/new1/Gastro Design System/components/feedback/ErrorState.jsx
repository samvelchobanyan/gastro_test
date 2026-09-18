import React from 'react';

/**
 * ErrorState — message with a retry action shown when content fails to load.
 * Redundant to color: uses a warning glyph + text, not hue alone.
 */
export function ErrorState({
  title = 'Something went wrong',
  description = 'We couldn’t load this. Please try again.',
  retryLabel = 'Try again',
  onRetry = () => {},
}) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      padding: 'var(--space-xxl) var(--space-lg)', fontFamily: 'var(--font-family-base)',
    }}>
      <div style={{
        width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-full)', background: 'var(--color-bg-error)',
        color: 'var(--color-status-error)', fontSize: 36, marginBottom: 'var(--space-base)',
      }}><i className="ph ph-warning" aria-hidden="true" /></div>
      <h3 style={{ margin: 0, fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>{title}</h3>
      <p style={{ margin: 'var(--space-sm) 0 0', maxWidth: 260, fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)', color: 'var(--color-text-tertiary)' }}>{description}</p>
      <button type="button" onClick={onRetry}
        onPointerDown={() => setPressed(true)} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
        style={{
          marginTop: 'var(--space-lg)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)',
          height: 48, padding: '0 var(--space-lg)', borderRadius: 'var(--radius-md)',
          border: 'var(--border-width-default) solid var(--color-border-default)',
          background: pressed ? 'var(--color-bg-surface-sunken)' : 'transparent', color: 'var(--color-text-primary)',
          fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body-lg)', fontWeight: 'var(--font-weight-semibold)',
          cursor: 'pointer', transition: 'var(--transition-press)',
        }}>
        <i className="ph ph-arrow-clockwise" aria-hidden="true" style={{ fontSize: 18 }} />{retryLabel}
      </button>
    </div>
  );
}
