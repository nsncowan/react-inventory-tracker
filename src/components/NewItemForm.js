import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewItemForm(props){

  function handleNewItemFormSubmissionOrigin(event) {
    event.preventDefault();
    props.AddItemToListProp1({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: parseInt(event.target.price.value),
      stock: parseInt(event.target.stock.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewItemFormSubmissionOrigin}
        buttonText="Add Item!" />
    </React.Fragment>
  );
}


// add PropTypes in lesson 36
NewItemForm.propTypes = {
  AddItemToListProp1: PropTypes.func
};

export default NewItemForm;

