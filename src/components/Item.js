import React from "react";

function Item() {
  const name = "Item Name";
  const origin = "Item Origin";
  const price = "Item Price";
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{origin}</h3>
      <h3>{price}</h3>
    </React.Fragment>
  );
}

export default Item;