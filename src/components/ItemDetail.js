import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, deleteItemV1 } = props;

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <h3>{item.origin}</h3>
      <h3>{item.price}</h3>
      <button onClick={props.handleEditClickV1}>Edit Item</button>
      <button onClick={() => deleteItemV1(item.id)}>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  handleEditClickV1: PropTypes.func,
  deleteItemV1: PropTypes.func,
}

export default ItemDetail;