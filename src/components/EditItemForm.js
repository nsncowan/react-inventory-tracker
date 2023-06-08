import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

  function editItemFormSubmissionOrigin(event) {
    event.preventDefault();
    props.editItemV1({
      name: event.target.names.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      id: item.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        editItemFormSubmissionV1={editItemFormSubmissionOrigin}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  editItemV1: PropTypes.func
};

export default EditItemForm;