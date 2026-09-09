# TimePicker

Chip grid of time slots — reservations, pickup scheduling. Disabled slots mark unavailable times.

```jsx
<TimePicker value={time} onChange={setTime}
  slots={['12:00','12:30',{time:'13:00',disabled:true},'13:30']} />
```
