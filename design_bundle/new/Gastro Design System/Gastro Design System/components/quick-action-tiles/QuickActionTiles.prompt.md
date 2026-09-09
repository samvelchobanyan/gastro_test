# QuickActionTiles

Row of square shortcut tiles — icon + label (Rate, History, Favourites…).

```jsx
<QuickActionTiles actions={[
  {icon:'star', label:'Rate', onClick:rate},
  {icon:'clock-counter-clockwise', label:'History', onClick:openHistory},
  {icon:'heart', label:'Favourites', onClick:openFavourites},
]} />
```

Use `QuickActionTile` directly for a single tile.
