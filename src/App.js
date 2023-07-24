import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConditionalRenderingPage from "./Pages/ConditionalRendering/ConditionalRenderingPage.js";
import TodoListPage from "./Pages/ToDoListPage/TodoListPage.js";
import PokemonPage from "./Pages/PokemonPage/PokemonPage.js";
import FbPage from "./Pages/FbPage/FbPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route
          path="/ConditionalRendering"
          element={<ConditionalRenderingPage />}
        />
        <Route path="/Fb" element={<FbPage />} />
        <Route path="/TodoList" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
