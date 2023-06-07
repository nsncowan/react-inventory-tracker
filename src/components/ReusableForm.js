import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.handleNewItemFormSubmissionV1}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"/>
        <input
          type="text"
          name="origin"
          placeholder="Item Origin"/>
        <input
          type="number"
          name="price"
          placeholder="Item Price"/>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  handleNewItemFormSubmissionV1: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;