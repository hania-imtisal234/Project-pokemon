import { useState } from "react";
import "./Card.css";

const Card = ({ name, weight, baseExperience, pokemonImg }) => {
  return (
    <div className="cards">
      <div className="photo">
        <img className="pokemonImg" src={pokemonImg} alt={name} />
      </div>
      <div className="Title">
        <h2 className="pokemonName">{name}</h2>

        <h4 className="pokemonWeight">Weight: {weight}</h4>
        <h4 className="pokemonExperience">Base Experience: {baseExperience}</h4>
      </div>
    </div>
  );
};
export default Card;
