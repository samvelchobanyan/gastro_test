# OrderStatusTimeline

Vertical progress stepper for order tracking. Completed steps fill + check; current step pulses.

```jsx
<OrderStatusTimeline currentIndex={1} steps={[
  {label:'Order placed',time:'6:02 PM',icon:'receipt'},
  {label:'Preparing',time:'6:05 PM',icon:'cooking-pot'},
  {label:'Out for delivery',icon:'motorcycle'},
  {label:'Delivered',icon:'check-circle'},
]} />
```
