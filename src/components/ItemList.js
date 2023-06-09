import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <h2>Our Selection: </h2>
      <hr />
      {props.itemList.map((item) => 
        <Item
          changeSelectedItemProp2 = {props.changeSelectedItemProp1}
          // sellItemFunctionV2 = {props.sellItemFunctionV1} 
          name={item.name}
          origin = {item.origin}
          price = {item.price}
          stock = {item.stock}
          id={item.id}
          key={item.id} />
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  changeSelectedItemProp1: PropTypes.func,
  // sellItemFunctionV1: PropTypes.func
};

export default ItemList;