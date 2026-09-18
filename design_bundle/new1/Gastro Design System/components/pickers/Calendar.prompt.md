# Calendar

Full month-grid date picker combined with time slots — choose a date **and** time in one surface (scheduled orders, reservations). Month arrows navigate; today is dotted; past dates disable.

```jsx
const [when, setWhen] = React.useState({ date: null, time: null });
<Calendar value={when} onChange={setWhen}
  timeSlots={['18:00','18:30','19:00',{time:'19:30',disabled:true},'20:00']} />
```

`value` is `{ date: 'YYYY-MM-DD', time: 'HH:mm' }`. For a compact inline date-only scroller use `DatePicker`; for time-only use `TimePicker`.
