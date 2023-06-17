
## main structure

- app
  - header
  - inventory control
      - item list
          - item detail button - redirect
          - add item button - redirect
          - item.js 
      - new item form
      - item detail - current quantity 
      - update item
          - sell quantity of item (button to sell)

FUNCTIONS

(ItemControl) changeSelectedItemOrigin ==> (ItemList) changeSelectedItemV1 ==> (Item) changeSelectedItemV2


## workflow

  - make Header component
  - add Header to App
  - make hard coded Item component
  - make hard coded ItemList component by adding Item to it
  - add ItemList to App component
  - lift hard-coded props to ItemList
  - access ItemList(parent) props in Item(child)


## trial naming convention for passing props

  - functionNameOrigin
  - functionNameV1
  - functionNameV2 ...etc


  ## Bug Fix

  The following function was running in an infinite loop because I was not using an anonymous arrow function. The CORRECTED syntax is below:
```jsx
<button onClick={() => props.reduceStockProp2(props.id)}>Sell Item</button> {/* // needed to change syntax: review lesson */}
```