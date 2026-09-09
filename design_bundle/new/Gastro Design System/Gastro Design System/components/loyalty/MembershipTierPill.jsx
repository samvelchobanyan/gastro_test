import React from 'react';

/**
 * MembershipTierPill — pill showing a loyalty membership tier (Regular /
 * Advanced / Prime — names are brand-configurable) with a crown icon and an
 * optional discount amount after a dot separator. Designed for dark loyalty
 * surfaces: neutral-0 text on a neutral-0 @ 10% translucent fill.
 */
export function MembershipTierPill({
  membership = 'Regular',
  discountLabel = null,
}) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start',
      padding: '4px 12px', borderRadius: 'var(--radius-full)',
      background: 'rgba(255,255,255,0.10)', color: 'var(--gray-0)',
      fontSize: 'var(--font-size-body-xs)', lineHeight: 'var(--line-height-body-xs)',
      fontWeight: 'var(--font-weight-regular)', fontFamily: 'var(--font-family-base)',
    }}>
      <i className="ph-fill ph-crown" aria-hidden="true" style={{ fontSize: 13, marginRight: 6 }} />{membership}
      {discountLabel && <span style={{ color: 'var(--gray-0)' }}><span aria-hidden="true" style={{ display: 'inline-flex', justifyContent: 'center', width: 14 }}>·</span>{discountLabel} off</span>}
    </span>
  );
}
