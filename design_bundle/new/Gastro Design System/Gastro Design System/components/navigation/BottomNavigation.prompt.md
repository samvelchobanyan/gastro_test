# BottomNavigation

Persistent bottom nav across core sections. Active item = accent + filled glyph.

```jsx
<BottomNavigation activeKey={tab} onChange={setTab} items={[
  {key:'home',icon:'house',label:'Home'},
  {key:'search',icon:'magnifying-glass',label:'Search'},
  {key:'orders',icon:'receipt',label:'Orders',badge:1},
  {key:'profile',icon:'user',label:'Profile'},
]} />
```
