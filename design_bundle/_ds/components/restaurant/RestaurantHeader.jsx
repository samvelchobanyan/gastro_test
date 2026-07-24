import React from 'react';
import { RatingStars } from '../rating/RatingStars.jsx';

/**
 * RestaurantHeader — full-width hero header for a restaurant's own screen:
 * cover photo with restaurant name, description and rating overlaid, kept
 * readable by a bottom-up gradient scrim.
 */
export function RestaurantHeader({
  coverImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900',
  name = '',
  description = '',
  rating = 0,
  reviewCount = null,
  isOpen = true,
  onBack = null,
}) {
  return (
    <div style={{ position: 'relative', width: '100%', height: 260, overflow: 'hidden', fontFamily: 'var(--font-family-base)', background: coverImage ? `center/cover no-repeat url("${coverImage}")` : 'var(--color-bg-surface-sunken)' }}>
      {/* Bottom-up gradient scrim for legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 32%, rgba(0,0,0,0) 62%)' }} />

      {/* Top bar */}
      {onBack && (
        <div style={{ position: 'absolute', top: 'var(--space-md)', left: 'var(--space-md)' }}>
          <button type="button" onClick={onBack} aria-label="Back" style={{
            width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'var(--alpha-white-24)',
            backdropFilter: 'blur(6px)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}><i className="ph ph-arrow-left" aria-hidden="true" /></button>
        </div>
      )}

      {/* Overlaid text */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'var(--space-base)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)', fontWeight: 'var(--font-weight-semibold)', color: '#fff' }}>{name}</h1>
        {description && (
          <p style={{ margin: '6px 0 0', fontSize: 'var(--font-size-body)', lineHeight: 'var(--line-height-body)', color: 'var(--alpha-white-80, rgba(255,255,255,0.85))' }}>{description}</p>
        )}
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <RatingStars value={rating} size={15} readOnly />
          <span style={{ fontSize: 'var(--font-size-body)', fontWeight: 'var(--font-weight-semibold)', color: '#fff' }}>{rating.toFixed(1)}</span>
          {reviewCount != null && (
            <span style={{ fontSize: 'var(--font-size-body)', color: 'rgba(255,255,255,0.8)' }}>({reviewCount})</span>
          )}
        </div>
      </div>
    </div>
  );
}
