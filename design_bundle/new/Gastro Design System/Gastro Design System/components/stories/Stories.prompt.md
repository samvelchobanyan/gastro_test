# Stories

Instagram-style story ring: circular thumbnail with a ring that signals **unseen** (brand-color ring) vs **seen** (grey ring), with an optional label beneath.

```jsx
<Stories imageUrl={img} label="Chef's specials" seen={false} />
<Stories imageUrl={img} label="Watched" seen />
```

Compose several in a horizontal scroll row on a home screen. Set `size` to scale the ring; omit `imageUrl` for a placeholder.
