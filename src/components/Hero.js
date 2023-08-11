import React from "react";

import "./Hero.css";

import hero from "./images/yits-hero.png";

const Hero = (props) => {
  return (
    <div className="hero container-fluid col-xxl-8 px-4 py-5" id="about">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-0">
        <div className="col-md-12 col-lg-6">
          <img
            src={hero}
            className="d-block mx-lg-auto img-fluid heroImg"
            alt="IT Hero"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
        <div className="col-md-12 col-lg-6 px-lg-5">
          <h1 className="heroHeading display-lg-4 px-lg-5 fw-bold text-body-emphasis mb-3">
            We don't just build websites,
            <br /> We build websites that sells!
          </h1>
          <p className="offer lead px-lg-5">
            We offer custom development that follows fast, reliable, and
            technical debt-free processes to ensure companies can scale without
            technology getting in the way.
          </p>
          <button
            type="button"
            className="formButton btn btn-primary btn-lg px-lg-5 mx-lg-5"
            onClick={props.openForm}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
