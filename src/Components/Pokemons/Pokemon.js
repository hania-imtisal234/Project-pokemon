import { useEffect, useState } from "react";
import "./Pokemon.css";
import Card from "../Card/Card";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonApi = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      const pokemonQualities = [];

      for (const pokemon of data.results) {
        const pokemonUrl = await fetch(pokemon.url);
        const pokemonDetails = await pokemonUrl.json();

        const { name, sprites, weight, base_experience } = pokemonDetails;
        pokemonQualities.push({
          name: name,
          img: sprites.front_default,
          weight: weight,
          baseExperience: base_experience,
        });
      }
      setPokemonList(pokemonQualities);
    } catch (err) {
      console.error("Can't fetch Data", err);
      throw new Error(err);
    }
  };

  useEffect(() => {
    getPokemonApi();
  }, []);
  const createCard = () => {
    pokemonList.map((pokemon) => console.log(pokemon));
  };
  createCard();
  return (
    <div className="pokemons">
      <div className="cards-container">
        {!pokemonList ? (
          <div>
            <h4>Loading Data...</h4>
          </div>
        ) : (
          <div>
            {!pokemonList.length ? (
              <div>Loading...</div>
            ) : (
              pokemonList.map((pokemon, index) => (
                <div key={index} className="pokemon-card">
                  <Card
                    name={pokemon.name}
                    weight={pokemon.weight}
                    baseExperience={pokemon.baseExperience}
                    pokemonImg={pokemon.img}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Pokemon;
