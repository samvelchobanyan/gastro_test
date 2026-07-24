import React from 'react';

/**
 * Toast / Snackbar — brief, non-blocking message confirming an action.
 * Anchored bottom; supports a status tone, optional action and auto-dismiss.
 * Render conditionally; `open` drives the enter/exit transition.
 */
export function Toast({
  open = false,
  message = '',
  tone = 'default',        // 'default' | 'success' | 'error'
  actionLabel = null,
  onAction = () => {},
  onDismiss = null,
}) {
  const icons = { success: 'check-circle', error: 'warning-circle', default: null };
  const colors = { success: 'var(--color-status-success)', error: 'var(--color-status-error)', default: null };
  const icon = icons[tone];

  return (
    <div aria-live="polite" style={{
      position: 'absolute', left: 'var(--space-base)', right: 'var(--space-base)', bottom: 'var(--space-base)',
      zIndex: 70, pointerEvents: open ? 'auto' : 'none',
      transform: open ? 'translateY(0)' : 'translateY(150%)', opacity: open ? 1 : 0,
      transition: 'transform var(--duration-base) var(--ease-decelerate), opacity var(--duration-base) var(--ease-standard)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
        minHeight: 48, padding: '0 var(--space-base)', boxSizing: 'border-box',
        background: 'var(--toast-bg)', color: 'var(--toast-text)',
        borderRadius: 'var(--radius-md)', boxShadow: 'var(--elevation-overlay)',
        fontFamily: 'var(--font-family-base)',
      }}>
        {icon && <i className={`ph-fill ph-${icon}`} aria-hidden="true" style={{ fontSize: 'var(--icon-sm)', color: colors[tone] }} />}
        <span style={{ flex: 1, fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)' }}>{message}</span>
        {actionLabel && (
          <button type="button" onClick={onAction} style={{
            border: 'none', background: 'transparent', color: 'var(--accent-300)', cursor: 'pointer',
            fontFamily: 'var(--font-family-base)', fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)',
          }}>{actionLabel}</button>
        )}
        {onDismiss && (
          <button type="button" onClick={onDismiss} aria-label="Dismiss" style={{
            border: 'none', background: 'transparent', color: 'var(--alpha-white-24)', cursor: 'pointer', fontSize: 18,
          }}><i className="ph ph-x" aria-hidden="true" /></button>
        )}
      </div>
    </div>
  );
}
