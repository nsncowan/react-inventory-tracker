import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item) => 
        <Item
          changeSelectedItemV2 = {props.changeSelectedItemV1} 
          name={item.name}
          origin = {item.origin}
          price = {item.price}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  changeSelectedItemV1: PropTypes.func
};

export default ItemList;