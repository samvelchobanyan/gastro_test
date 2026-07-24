import React from 'react';
import { RatingStars } from '../rating/RatingStars.jsx';
import { Badge } from '../badge/Badge.jsx';

/**
 * RestaurantCard — discovery card for a restaurant: photo, name, cuisine,
 * rating, delivery time/fee. Used in lists, carousels and search results.
 */
export function RestaurantCard({
  image = null,
  name = '',
  cuisine = '',
  rating = 0,
  reviewCount = null,
  deliveryTime = '',
  deliveryFee = null,   // 0 = "Free delivery"; null = hide
  closed = false,
  promoLabel = null,    // e.g. "20% off"
  onClick = null,
}) {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div onClick={onClick}
      onPointerDown={() => onClick && setPressed(true)} onPointerUp={() => setPressed(false)} onPointerLeave={() => setPressed(false)}
      style={{
        borderRadius: 'var(--radius-card)', overflow: 'hidden', background: 'var(--card-bg)',
        border: 'var(--border-width-default) solid var(--card-border)', boxShadow: 'var(--elevation-card)',
        cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-family-base)',
        transform: pressed ? 'scale(var(--press-scale))' : 'none', transition: 'var(--transition-press)',
      }}>
      <div style={{
        position: 'relative', height: 140, background: image ? `center/cover no-repeat url("${image}")` : 'var(--color-bg-surface-sunken)',
      }}>
        {promoLabel && (
          <span style={{
            position: 'absolute', top: 10, left: 10, background: 'var(--color-brand-primary)', color: 'var(--color-text-on-brand)',
            padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: 11, fontWeight: 'var(--font-weight-bold)',
          }}>{promoLabel}</span>
        )}
        {closed && (
          <div style={{
            position: 'absolute', inset: 0, background: 'var(--alpha-black-60)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 'var(--font-weight-semibold)',
          }}>Closed</div>
        )}
      </div>
      <div style={{ padding: 'var(--space-md) var(--space-base)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
          <RatingStars value={rating} size={14} readOnly />
        </div>
        <div style={{ marginTop: 2, fontSize: 'var(--font-size-caption)', color: 'var(--color-text-tertiary)' }}>
          {cuisine}{reviewCount != null ? ` · ${reviewCount} reviews` : ''}
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-sm)', fontSize: 'var(--font-size-caption)', color: 'var(--color-text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><i className="ph ph-clock" aria-hidden="true" />{deliveryTime}</span>
          {deliveryFee != null && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <i className="ph ph-motorcycle" aria-hidden="true" />{deliveryFee === 0 ? 'Free delivery' : `$${deliveryFee.toFixed(2)}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
