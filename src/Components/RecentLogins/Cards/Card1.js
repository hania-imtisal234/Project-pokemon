import { useState } from "react";
import "./Card1.css";
import img1 from "./imgs/user.jpg";

function Card1({ cardName }) {
  return (
    <div class="cards">
      <div class="photo">
        <a href="#">
          <img class="logo" src={img1}></img>
        </a>
      </div>
      <div class="name">
        <h4>{cardName}</h4>
      </div>
    </div>
  );
}
export default Card1;
