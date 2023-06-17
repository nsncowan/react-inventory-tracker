import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.name}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Roast: {props.roast}</h3>
        <h3>Price: ${props.price}</h3>
        <h3>Stock: {props.stock}</h3>
      </div>
      <button onClick={() => props.changeSelectedItemProp2(props.id)}>View Item Details</button> 
      <button onClick={() => props.reduceStockProp2(props.id)}>Sell Item</button>
      <hr />
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.string,
  changeSelectedItemProp2: PropTypes.func,
  reduceStockProp2: PropTypes.func
};

export default Item;