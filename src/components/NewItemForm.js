import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Add Item!" />
    </React.Fragment>
  );
}


// add PropTypes in lesson 36
NewItemForm.propTypes = {
onNewItemCreation: PropTypes.func
};

export default NewItemForm;

