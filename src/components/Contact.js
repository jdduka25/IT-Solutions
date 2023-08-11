import React from "react";

import "./Contact.css";

import contact from "./images/contact.png";

const Contact = (props) => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-0">
          <div className="col-sm-12 col-lg-6">
            <img
              src={contact}
              className="contactd-block mx-lg-auto img-fluid contactHeroImg"
              alt="contact us"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="col-sm-12 col-lg-6 px-lg-5">
            <h4 className="contact-heading display-4 px-lg-5 fw-bold text-body-emphasis mb-3">
              Let's talk about your plans!
            </h4>
            <p className="contact-msg lead px-lg-5">
              If you need help starting out or just looking to improve an
              existing site. We're here to help and build great projects with
              you!
            </p>
            <button
              type="button"
              className="contactButton btn btn-primary btn-lg px-lg-5 mx-lg-5"
              onClick={props.openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <footer>Copyright ©️ IT Solutions. All rights reserved.</footer>
    </section>
  );
};

export default Contact;
