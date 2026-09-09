# SearchFiltersPanel

Grouped search filters — max price slider, dietary tags, apply/reset. Typically shown in a BottomSheet.

```jsx
<BottomSheet open={open} onClose={close} title="Filters">
  <SearchFiltersPanel maxPrice={price} onMaxPriceChange={setPrice}
    selectedDietary={diet} onToggleDietary={toggle} onApply={apply} onReset={reset} />
</BottomSheet>
```
