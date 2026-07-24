import React from 'react';
import { SegmentedControl } from '../tabs/SegmentedControl.jsx';

/**
 * DeliveryPickupToggle — thin preset wrapper over SegmentedControl for the
 * ubiquitous Delivery / Pickup switch at the top of ordering screens.
 */
export function DeliveryPickupToggle({ value = 'delivery', onChange = () => {} }) {
  return (
    <SegmentedControl
      value={value} onChange={onChange}
      options={[
        { label: 'Delivery', value: 'delivery', icon: 'motorcycle' },
        { label: 'Pickup', value: 'pickup', icon: 'storefront' },
      ]}
    />
  );
}
