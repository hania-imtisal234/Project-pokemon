import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemon from "./Components/Pokemons/Pokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header temp">
        <BrowserRouter>
          <Routes>
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
