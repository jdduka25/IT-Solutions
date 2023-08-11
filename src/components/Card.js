import React from "react";

import "./Card.css";

import hostingSecurity from "./images/hosting-security.png";
import seoServices from "./images/seo-services.png";
import webDevelopment from "./images/web-development.png";

const Card = (props) => {
  return (
    <div className="container">
      <h2 className="pb-lg-5 display-4">Our Services</h2>
      <div className="row pb-5 card-container">
        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img src={hostingSecurity} alt="Hosting Security" />
          <h3 className="fs-2 my-4">Hosting Security</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            type="button"
            className="quoteButton btn btn-primary btn-lg"
            onClick={props.openForm}
          >
            Get a Quote
          </button>
        </div>

        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img src={webDevelopment} alt="Web Development" />
          <h3 className="fs-2 my-4">Web Development</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            type="button"
            className="quoteButton btn btn-primary btn-lg"
            onClick={props.openForm}
          >
            Get a Quote
          </button>
        </div>

        <div className="card col-sm-12 col-md-6 col-lg-4">
          <img src={seoServices} alt="SEO Services" />
          <h3 className="fs-2 my-4">SEO Services</h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            type="button"
            className="quoteButton btn btn-primary btn-lg"
            onClick={props.openForm}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
