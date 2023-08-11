import React from "react";

import "./ModalForm.css";

const ModalForm = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.closeForm} />
      <div className="formBox">
        <h1 className="formHeader">Contact Us</h1>
        <form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              required
            />
          </div>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" id="companyName" name="companyName" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <div className="btn-toolbar">
            <button
              className="btn btn-light btn-lg mt-3"
              onClick={props.closeForm}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-lg mt-3 ms-auto"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
