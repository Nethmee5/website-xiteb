import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../Slider/Slider.scss";
import facebook from "../assets/homepage/facebook.png";
import linkedin from "../assets/homepage/linkedin.png";
import youtube from "../assets/homepage/youtube.png";
import twitter from "../assets/homepage/twitter.png";
import instagram from "../assets/homepage/instagram.png";

const Slider = () => {
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <a href="#" id="fb">
          <img className="img-icons" src={facebook} />
        </a>
        <a href="#" id="lk">
          <img className="img-icons" src={linkedin} />
        </a>
        <a href="#" id="yb">
          <img className="img-icons" src={youtube} />
        </a>
        <a href="#" id="tw">
          <img className="img-icons" src={twitter} />
        </a>
        <a href="#" id="in">
          <img className="img-icons" src={instagram} />
        </a>
      </div>
    </>
  );
};

export default Slider;
