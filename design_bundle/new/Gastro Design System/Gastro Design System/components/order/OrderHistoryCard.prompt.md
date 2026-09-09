# OrderHistoryCard

Past-order summary — restaurant, date, items, total, status. Pair `actions` with `ReorderButton`.

```jsx
<OrderHistoryCard restaurantName="Nolana Pizzeria" date="Jun 12, 6:02 PM"
  itemsSummary="Margherita Pizza, Caesar Salad +1 more" total={34.5}
  actions={<ReorderButton onClick={reorder} />} />
```
