import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"/>
        <input
          type="text"
          name="origin"
          placeholder="Item Origin"/>
        <input
          type="text"
          name="roast"
          placeholder="Item Roast"/>
        <input
          type="number"
          name="price"
          placeholder="Item Price"/>
        <input
          type="number"
          name="stock"
          placeholder="Amount Currently in Stock"/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;