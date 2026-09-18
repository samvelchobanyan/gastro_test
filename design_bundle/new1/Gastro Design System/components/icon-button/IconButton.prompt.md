# IconButton

Compact icon-only control — favorite, share, close, back. Always keeps a ≥48px tap target.

```jsx
<IconButton icon="heart" active={fav} onClick={toggleFav} ariaLabel="Favorite" />
```

Variants: `ghost`, `filled`, `tonal`. `active` fills the glyph (ghost). Always pass `ariaLabel`.
