import Pokemon from "../../Components/Pokemons/Pokemon.js";
import "./PokemonPage.css";
function PokemonPage() {
  return (
    <div className="Pokemon_Page">
      <header className="page-header">
        <Pokemon />
      </header>
    </div>
  );
}

export default PokemonPage;
