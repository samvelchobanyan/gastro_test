# TextArea

Multi-line input for longer text — special instructions, written reviews.

```jsx
<TextArea label="Special instructions" value={notes} onChange={setNotes}
  placeholder="No onions, please" maxLength={200} />
```

Optional `maxLength` shows a live counter. Vertically resizable.
