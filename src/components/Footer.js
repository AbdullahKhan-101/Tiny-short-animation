import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="fotter_container">
      <h6>@BenaissaGhrib</h6>
      <p>
        about 121 days ago RT @dannydevan If you spent $1 million a day, it
        would take 2,700 years to spend $1 trillion. The U.S. printed $6
        trillion in 227… https://t.co/seP8G1IuVo
      </p>
      <div className="black_back">
        <div className="icons">
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={require("../images/youtube.png")} alt="" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={require("../images/facebook.png")} alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" rel="noreferrer" target="_blank">
              <img src={require("../images/twitter-sign.png")} alt="" />
            </a>
          </li>
          <li>
            <a rel="noreferrer" href="https://instagram.com" target="_blank">
              <img src={require("../images/instagram.png")} alt="" />
            </a>
          </li>
        </div>
        <a href="#top" className="up">
          <img src={require("../images/upload.png")} alt="" />
        </a>
        <p>© 2014 BOUNCEVCARD All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
