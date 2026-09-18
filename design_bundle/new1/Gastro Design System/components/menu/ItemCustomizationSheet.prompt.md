# ItemCustomizationSheet

Bottom sheet for configuring a dish before adding to cart — size, add-ons, quantity. Composes BottomSheet + RadioGroup + Checkbox + Stepper.

```jsx
<ItemCustomizationSheet open={open} onClose={close} itemName="Margherita" basePrice={12}
  sizeOptions={[{label:'Regular',value:'r',priceDelta:0},{label:'Large',value:'l',priceDelta:4}]}
  addOns={[{key:'cheese',label:'Extra cheese',price:2}]}
  onAddToCart={addToCart} />
```
