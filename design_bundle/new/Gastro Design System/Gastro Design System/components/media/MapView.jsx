import React from 'react';

/**
 * MapView — static/placeholder map surface for delivery tracking and
 * address selection. Neutral map-styled background with a pin marker;
 * intended to be swapped for a real map SDK (Mapbox/Google Maps) later.
 */
export function MapView({ height = 200, markerLabel = null, showCourier = false }) {
  return (
    <div style={{
      position: 'relative', width: '100%', height, borderRadius: 'var(--radius-card)',
      overflow: 'hidden', background: `
        repeating-linear-gradient(0deg, var(--gray-100) 0 1px, transparent 1px 24px),
        repeating-linear-gradient(90deg, var(--gray-100) 0 1px, transparent 1px 24px),
        var(--gray-50)`,
      fontFamily: 'var(--font-family-base)',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <span style={{
          width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', background: 'var(--color-brand-primary)',
          boxShadow: 'var(--elevation-raised)',
        }}>
          <i className="ph-fill ph-map-pin" aria-hidden="true" style={{ color: 'var(--color-text-on-brand)', fontSize: 18, transform: 'rotate(45deg)' }} />
        </span>
      </div>
      {showCourier && (
        <div style={{
          position: 'absolute', top: '38%', left: '62%', width: 30, height: 30, borderRadius: '50%',
          background: 'var(--color-bg-main)', boxShadow: 'var(--elevation-card)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-primary)',
        }}><i className="ph-fill ph-motorcycle" aria-hidden="true" style={{ fontSize: 16 }} /></div>
      )}
      {markerLabel && (
        <div style={{
          position: 'absolute', bottom: 12, left: 12, right: 12, background: 'var(--color-bg-main)',
          borderRadius: 'var(--radius-md)', padding: '8px 12px', boxShadow: 'var(--elevation-card)',
          fontSize: 'var(--font-size-caption)', color: 'var(--color-text-secondary)',
        }}>{markerLabel}</div>
      )}
    </div>
  );
}
