
## main structure

- app
  - header
  - inventory control
      - item list
          - item detail button - redirect
          - add item button - redirect
      - new item form
      - item detail - current quantity 
      - update item
          - sell quantity of item (button to sell)


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