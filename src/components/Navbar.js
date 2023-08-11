import React from "react";

import "./Navbar.css";

import logo from "./images/it-solutions-logo.png";

const Navbar = () => {
  return (
    <nav className="navigate navbar navbar-expand-lg sticky-top py-lg-0 mx-lg-5 my-lg-3">
      <div className="container-fluid navigate">
        <a className="navbar-brand py-0" href="#home">
          <img className="logostyle" src={logo} alt="IT Solutions Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navigate navcon collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <ul className="navigate grid gap-lg-5 gap-sm-2 navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
