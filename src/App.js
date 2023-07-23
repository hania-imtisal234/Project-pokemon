import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./Components/Pokemons/Pokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header temp">
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
