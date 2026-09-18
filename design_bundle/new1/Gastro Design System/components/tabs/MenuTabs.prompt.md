# MenuTabs

Horizontal scroll row of 44px pill tabs, each pairing a small category image with a name. Active pill fills with the brand color.

```jsx
<MenuTabs value={cat} onChange={setCat}
  categories={[
    { label: 'Pizza', value: 'pizza', image: pizzaImg },
    { label: 'Burgers', value: 'burgers', image: burgerImg },
  ]} />
```

For text-only category switching use `MenuCategoryTabs` (Line Tabs); for view toggles use `TabBar`.
