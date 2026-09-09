# Radio

Single choice among a small exclusive set. Prefer `RadioGroup` to manage the selection.

```jsx
<RadioGroup name="tip" value={tip} onChange={setTip}
  options={[{label:'15%',value:15},{label:'20%',value:20},{label:'No tip',value:0}]} />
```
