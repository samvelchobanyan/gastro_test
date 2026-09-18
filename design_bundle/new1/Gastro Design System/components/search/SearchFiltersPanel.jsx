import React from 'react';
import { Slider } from '../forms/Slider.jsx';
import { Chip } from '../chip/Chip.jsx';
import { Button } from '../buttons/Button.jsx';

/**
 * SearchFiltersPanel — grouped filter controls for search results: max
 * price, dietary tags, and sort. Composes Slider + Tag + Button; typically
 * shown inside a BottomSheet.
 */
export function SearchFiltersPanel({
  maxPrice = 30,
  onMaxPriceChange = () => {},
  dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-free'],
  selectedDietary = [],
  onToggleDietary = () => {},
  onApply = () => {},
  onReset = () => {},
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', fontFamily: 'var(--font-family-base)' }}>
      <div>
        <h3 style={{ margin: '0 0 var(--space-md)', fontSize: 'var(--font-size-h3)', color: 'var(--color-text-primary)' }}>Max price</h3>
        <Slider min={5} max={50} step={5} value={maxPrice} onChange={onMaxPriceChange} formatValue={(v) => `$${v}`} />
      </div>
      <div>
        <h3 style={{ margin: '0 0 var(--space-md)', fontSize: 'var(--font-size-h3)', color: 'var(--color-text-primary)' }}>Dietary</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {dietaryOptions.map((d) => (
            <Chip key={d} label={d} selected={selectedDietary.includes(d)} onClick={() => onToggleDietary(d)} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
        <Button variant="secondary" onClick={onReset} fullWidth>Reset</Button>
        <Button onClick={onApply} fullWidth>Apply filters</Button>
      </div>
    </div>
  );
}
