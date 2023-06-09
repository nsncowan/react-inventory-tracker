import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, deleteItemProp1 } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>Name: {item.name}</h3>
      <h3>Origin: {item.origin}</h3>
      <h3>Roast: {item.roast}</h3>
      <h3>Price: ${item.price}</h3>
      <h3>Stock: {item.stock}</h3>
      <button onClick={props.handleEditClickProp1}>Edit Item</button>
      <button onClick={() => deleteItemProp1(item.id)}>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  handleEditClickProp1: PropTypes.func,
  deleteItemProp1: PropTypes.func,
}

export default ItemDetail;