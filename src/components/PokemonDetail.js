import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail, catchPokemon } from "../redux/pokemonSlice";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector((state) => state.pokemon.currentPokemon);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch, id]);

  const handleCatch = () => {
    dispatch(catchPokemon(pokemon));
  };

  return (
    <div>
      <h1>Pokemon Detail</h1>
      {pokemon && (
        <>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <p>Moves: {pokemon.moves.map((move) => move.move.name).join(", ")}</p>
          <button onClick={handleCatch}>Catch</button>
        </>
      )}
    </div>
  );
};

export default PokemonDetail;
