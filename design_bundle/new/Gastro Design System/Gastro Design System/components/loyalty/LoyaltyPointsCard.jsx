import React from 'react';
import { MembershipTierPill } from './MembershipTierPill.jsx';

/**
 * LoyaltyPointsCard — fixed 328×116 dark membership card. Neutral-900
 * background with an optional per-brand background image (placeholder by
 * default, sized 328×116). Left column: "Loyalty points" (H3), points
 * balance (H1), membership tier (Body small). Right: a 64×64 QR code.
 */
export function LoyaltyPointsCard({
  points = 1535,
  membership = 'Regular',
  discountLabel = null,
  qrValue = '',
  backgroundImage = null,
}) {
  const size = 21;
  let seed = 0;
  for (let i = 0; i < qrValue.length; i++) seed = (seed * 31 + qrValue.charCodeAt(i)) >>> 0;
  const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const inFinder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);
  const modules = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (inFinder(r, c)) continue;
      if (rand() > 0.55) modules.push([r, c]);
    }
  }
  const finder = (top, left) => (
    <React.Fragment key={`${top}-${left}`}>
      <rect x={left} y={top} width={7} height={7} fill="#000" />
      <rect x={left + 1} y={top + 1} width={5} height={5} fill="#fff" />
      <rect x={left + 2} y={top + 2} width={3} height={3} fill="#000" />
    </React.Fragment>
  );

  return (
    <div style={{
      position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
      width: 328, height: 116, padding: 'var(--space-base)', paddingRight: 'var(--space-lg)', borderRadius: 'var(--space-base)',
      background: 'var(--gray-900)', fontFamily: 'var(--font-family-base)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-base)',
    }}>
      {/* Per-brand background image (placeholder) */}
      {backgroundImage ? (
        <img src={backgroundImage} alt="" style={{ position: 'absolute', inset: 0, width: 328, height: 116, objectFit: 'cover', pointerEvents: 'none' }} />
      ) : (
        <span aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 10px, rgba(255,255,255,0) 10px 20px)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Left content */}
      <div style={{ position: 'relative', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 'var(--font-size-body-sm)', lineHeight: 'var(--line-height-body-sm)', fontWeight: 'var(--font-weight-regular)', fontFamily: 'var(--font-family-base)', color: 'var(--gray-500)' }}>Loyalty points</span>
        <span style={{ fontSize: 'var(--font-size-h1)', lineHeight: 'var(--line-height-h1)', fontWeight: 'var(--font-weight-bold)', fontFamily: 'var(--font-family-base)', color: 'var(--gray-0)' }}>{points.toLocaleString()}</span>
        <div style={{ marginTop: 'var(--space-xs)', display: 'flex' }}>
          <MembershipTierPill membership={membership} discountLabel={discountLabel} />
        </div>
      </div>

      {/* QR code */}
      <div style={{ position: 'relative', flex: '0 0 auto', width: 64, height: 64, background: '#fff', borderRadius: 'var(--radius-sm)', padding: 'var(--space-xs)', boxSizing: 'border-box' }}>
        <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" shapeRendering="crispEdges">
          <rect x={0} y={0} width={size} height={size} fill="#fff" />
          {finder(0, 0)}
          {finder(0, size - 7)}
          {finder(size - 7, 0)}
          {modules.map(([r, c]) => <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#000" />)}
        </svg>
      </div>
    </div>
  );
}
