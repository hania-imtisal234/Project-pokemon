import { useState } from "react";
import "./Card.css";

const Card = ({ img, cardTitle }) => {
  return (
    <div className="cards">
      <div class="photo">
        <a href="#">
          <img class="logo" src={img} />
        </a>
      </div>
      <div class="Title">
        <h4>{cardTitle}</h4>
      </div>
    </div>
  );
};
export default Card;
