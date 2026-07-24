import React from 'react';

/**
 * LoyaltyRewardsBadge — compact points/tier badge shown in the app bar or
 * profile card (e.g. "1,240 pts · Gold"). Optional progress ring to next tier.
 */
export function LoyaltyRewardsBadge({ points = 0, tier = null, progress = null, onClick = null }) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag onClick={onClick} type={onClick ? 'button' : undefined} style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-sm)', padding: '6px 12px',
      borderRadius: 'var(--radius-full)', background: 'var(--color-brand-subtle)', color: 'var(--color-text-accent)',
      border: 'none', cursor: onClick ? 'pointer' : 'default', fontFamily: 'var(--font-family-base)',
      WebkitTapHighlightColor: 'transparent',
    }}>
      <span style={{ position: 'relative', width: 22, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {progress != null && (
          <svg width="22" height="22" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
            <circle cx="11" cy="11" r="9" fill="none" stroke="var(--accent-200)" strokeWidth="2" />
            <circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" strokeWidth="2"
              strokeDasharray={2 * Math.PI * 9} strokeDashoffset={2 * Math.PI * 9 * (1 - progress)} strokeLinecap="round" />
          </svg>
        )}
        <i className="ph-fill ph-crown" aria-hidden="true" style={{ fontSize: 12 }} />
      </span>
      <span style={{ fontSize: 'var(--font-size-caption)', fontWeight: 'var(--font-weight-bold)' }}>
        {points.toLocaleString()} pts{tier ? ` · ${tier}` : ''}
      </span>
    </Tag>
  );
}
