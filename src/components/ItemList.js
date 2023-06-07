import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <>
      {props.itemList.map((item) => 
          <Item 
          name={item.name}
          origin = {item.origin}
          price = {item.price}/>
          )}
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  changeSelectedItemV1: PropTypes.func
};

export default ItemList;