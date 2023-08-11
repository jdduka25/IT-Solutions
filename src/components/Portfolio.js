import React from "react";

import "./Portfolio.css";

import dragonpay from "./images/dragonpay.jpg";
import coffeeph from "./images/coffeeph.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="display-4">Portfolio</h2>
      <p className="info">See our works in action</p>

      <div className="proj-container">
        <div className="proj-img">
          <img className="port-img" src={dragonpay} alt="dragonpay" />
          <h3 className="pt-3 proj-title">Payment Gateway Library in PHP</h3>
          <p className="text-body-secondar proj-info">BACK-END DEVELOPMENT</p>
        </div>
        <div className="proj-img">
          <img className="port-img" src={coffeeph} alt="CoffeePH" />
          <h3 className="pt-3 proj-title">CoffeePH - Website</h3>
          <p className="text-body-secondar proj-info">
            WEB DEVELOPMENT, WEB DESIGN, VISUAL IDENTITY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
