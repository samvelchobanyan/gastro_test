import React from 'react';

/**
 * BranchCard — single row/card for a restaurant's physical location:
 * photo, name, address and today's working hours. Used in a branch
 * picker/listing (choose pickup location, view all locations).
 */
export function BranchCard({
  image = null,
  name = '',
  address = '',
  hours = '',
  isOpenNow = true,
  distance = null,     // e.g. "1.2 km"
  onClick = null,
}) {
  const [pressed, setPressed] = React.useState(false);
  const interactive = Boolean(onClick);
  const Tag = interactive ? 'button' : 'div';

  return (
    <Tag
      type={interactive ? 'button' : undefined} onClick={onClick}
      onPointerDown={() => interactive && setPressed(true)}
      onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-md)', width: '100%',
        padding: 'var(--space-md)', boxSizing: 'border-box', textAlign: 'left',
        background: 'var(--card-bg)', border: 'var(--border-width-default) solid var(--card-border)',
        borderRadius: 'var(--radius-card)', boxShadow: 'var(--elevation-card)',
        cursor: interactive ? 'pointer' : 'default', fontFamily: 'var(--font-family-base)',
        transform: pressed ? 'scale(var(--press-scale))' : 'none', transition: 'var(--transition-press)',
      }}
    >
      <div style={{
        flex: '0 0 auto', width: 72, height: 72, borderRadius: 'var(--radius-md)', overflow: 'hidden',
        background: image ? `center/cover no-repeat url("${image}")` : 'var(--color-bg-surface-sunken)',
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <span style={{
            fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{name}</span>
          {distance && (
            <span style={{ flex: '0 0 auto', fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)' }}>· {distance}</span>
          )}
        </div>
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 6, marginTop: 4,
          fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)',
        }}>
          <i className="ph ph-map-pin" aria-hidden="true" style={{ fontSize: 16, marginTop: 2, flex: '0 0 auto', color: 'var(--color-text-tertiary)' }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{address}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          <i className="ph ph-clock" aria-hidden="true" style={{ fontSize: 16, flex: '0 0 auto', color: 'var(--color-text-tertiary)' }} />
          <span style={{ fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)' }}>{hours}</span>
          <span style={{
            marginLeft: 4, fontSize: 11, fontWeight: 'var(--font-weight-bold)', padding: '2px 8px', borderRadius: 'var(--radius-full)',
            background: isOpenNow ? 'var(--color-bg-success)' : 'var(--color-bg-error)',
            color: isOpenNow ? 'var(--color-text-success)' : 'var(--color-text-error)',
          }}>{isOpenNow ? 'Open' : 'Closed'}</span>
        </div>
      </div>
      {interactive && <i className="ph ph-caret-right" aria-hidden="true" style={{ flex: '0 0 auto', fontSize: 'var(--icon-sm)', color: 'var(--color-text-tertiary)' }} />}
    </Tag>
  );
}
