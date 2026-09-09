import React from 'react';
import { TabBar } from '../tabs/TabBar.jsx';

/**
 * DeliveryPickupToggle — thin preset wrapper over TabBar for the
 * ubiquitous Delivery / Pickup switch at the top of ordering screens.
 */
export function DeliveryPickupToggle({ value = 'delivery', onChange = () => {} }) {
  return (
    <TabBar
      value={value} onChange={onChange}
      options={[
        { label: 'Delivery', value: 'delivery', icon: 'motorcycle' },
        { label: 'Pickup', value: 'pickup', icon: 'storefront' },
      ]}
    />
  );
}
