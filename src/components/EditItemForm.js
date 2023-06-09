import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

  function editItemFormSubmissionOrigin(event) {
    event.preventDefault();
    props.editItemProp1({
      name: event.target.names.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      stock: event.target.stock.value,
      id: item.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={editItemFormSubmissionOrigin}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  editItemProp1: PropTypes.func
};

export default EditItemForm;