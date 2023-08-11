import React from "react";

import "./Technology.css";

import tailwind from "./images/technology/tailwind.png";
import php from "./images/technology/php.png";
import sass from "./images/technology/sass.png";
import mongodb from "./images/technology/mongodb.png";
import mysql from "./images/technology/mysql.png";
import aws from "./images/technology/aws.png";
import node from "./images/technology/nodejs.png";
import shopify from "./images/technology/shopify.png";
import wordpress from "./images/technology/wordpress.png";
import docker from "./images/technology/docker.png";
import bootstrap from "./images/technology/bootstrap.png";
import reactjs from "./images/technology/reactjs.png";
import laravel from "./images/technology/laravel.png";
import javascript from "./images/technology/javascript.png";
import css from "./images/technology/css.png";
import python from "./images/technology/python.png";
import gitlab from "./images/technology/gitlab.png";
import html from "./images/technology/html.png";
import photoshop from "./images/technology/photoshop.png";
import postgres from "./images/technology/postgres.png";

const Technology = () => {
  return (
    <div className="tech-container">
      <h2 className="display-5 pb-1">Technology we use</h2>
      <p className="info">
        Cutting-edge technologies to create the perfect website
      </p>
      <img className="img-tech" src={tailwind} alt="tailwind" />
      <img className="img-tech" src={php} alt="php" />
      <img className="img-tech" src={sass} alt="sass" />
      <img className="img-tech" src={mongodb} alt="mongodb" />
      <img className="img-tech" src={mysql} alt="mysql" />
      <img className="img-tech" src={aws} alt="aws" />
      <img className="img-tech" src={node} alt="node" />
      <img className="img-tech" src={shopify} alt="shopify" />
      <img className="img-tech" src={wordpress} alt="wordpress" />
      <img className="img-tech" src={docker} alt="docker" />
      <img className="img-tech" src={bootstrap} alt="bootstrap" />
      <img className="img-tech" src={reactjs} alt="reactjs" />
      <img className="img-tech" src={laravel} alt="laravel" />
      <img className="img-tech" src={javascript} alt="javascript" />
      <img className="img-tech" src={css} alt="css" />
      <img className="img-tech" src={python} alt="python" />
      <img className="img-tech" src={gitlab} alt="gitlab" />
      <img className="img-tech" src={html} alt="html" />
      <img className="img-tech" src={photoshop} alt="photoshop" />
      <img className="img-tech" src={postgres} alt="postgres" />
    </div>
  );
};

export default Technology;
