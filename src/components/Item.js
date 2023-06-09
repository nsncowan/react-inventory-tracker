import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.changeSelectedItemV2(props.id)}>
        <h3>{props.name}</h3>
        <h3>Origin: {props.origin}</h3>
        <h3>Roast: {props.roast}</h3>
        <h3>Price: ${props.price}</h3>
        <h3>Stock: {props.stock}</h3> // maybe include ternary for 'out of stock' or 'low stock' message
      </div>
      {/* <button onClick={props.sellItemFunction(props.id)}>Sell Item</button> */}
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
  // id: PropTypes.string,
  changeSelectedItemV2: PropTypes.func
  // sellItemFunction: PropTypes.func
};

export default Item;