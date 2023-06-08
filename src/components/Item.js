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
      <hr />
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  changeSelectedItemV2: PropTypes.func
};

export default Item;