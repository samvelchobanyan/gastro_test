import React from 'react';
import { MapView } from '../media/MapView.jsx';

/**
 * LiveOrderTrackingMap — MapView preset showing a live courier position
 * with an ETA caption. Thin composition over MapView for order-tracking
 * screens specifically.
 */
export function LiveOrderTrackingMap({ eta = '', height = 220 }) {
  return <MapView height={height} showCourier markerLabel={eta ? `Arriving in ${eta}` : null} />;
}
