import React from 'react';

/**
 * Avatar — circular image / initials representing a user or entity.
 * Falls back to initials, then a user glyph. Optional status dot.
 */
export function Avatar({
  src = null,
  name = '',
  size = 'md',         // 'xs' 24 | 'sm' 32 | 'md' 40 | 'lg' 56 | 'xl' 72
  shape = 'circle',    // 'circle' | 'rounded'
  status = null,       // 'online' | 'busy' | null
}) {
  const sizes = { xs: 24, sm: 32, md: 40, lg: 56, xl: 72 };
  const dim = sizes[size] || 40;
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  const box = {
    position: 'relative', width: dim, height: dim, flex: '0 0 auto',
    borderRadius: shape === 'circle' ? '50%' : 'var(--radius-md)',
    background: src ? `center/cover no-repeat url("${src}")` : 'var(--accent-100)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
    color: 'var(--color-text-accent)', fontFamily: 'var(--font-family-base)',
    fontSize: Math.round(dim * 0.38), fontWeight: 'var(--font-weight-semibold)',
  };
  const dot = {
    position: 'absolute', bottom: 0, right: 0, width: Math.max(8, dim * 0.24), height: Math.max(8, dim * 0.24),
    borderRadius: '50%', border: '2px solid var(--color-bg-main)',
    background: status === 'busy' ? 'var(--color-status-warning)' : 'var(--color-status-success)',
  };

  return (
    <span style={box} role="img" aria-label={name || 'Avatar'}>
      {!src && (initials || <i className="ph ph-user" aria-hidden="true" style={{ fontSize: Math.round(dim * 0.5) }} />)}
      {status && <span style={dot} aria-hidden="true" />}
    </span>
  );
}
