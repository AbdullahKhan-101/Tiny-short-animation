import React from "react";
import "./Card.css";

const Card = ({ img }) => {
  return (
    <div className="card">
      <div className="img_div">
        <img src={img} alt="" />
      </div>
      <p>Lorem ipsum dolor sit.</p>
      <button className="card_btn">Launch This Version</button>
    </div>
  );
};

export default Card;
