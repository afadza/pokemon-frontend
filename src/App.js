import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonList from "./pages/MyPokemonList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-list" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/my-pokemon" element={<MyPokemonList />} />
      </Routes>
    </Router>
  );
};

export default App;
