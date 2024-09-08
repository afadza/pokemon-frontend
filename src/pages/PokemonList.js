import React from "react";
import Main from "../layout/Main";
import useListPokemon from "../hooks/usePokemonList";
import ModalSuccessCatch from "./components/ModalSuccessCatch";

const PokemonList = () => {
  const {
    dispatch,
    pokemons,
    selectedPokemon,
    isAnimating,
    openModal,
    setOpenModal,
    handleStart,
  } = useListPokemon();

  return (
    <Main>
      <h1 className="text-3xl text-white mt-10">Pokemon List</h1>
      <ul className="flex flex-wrap justify-between items-center">
        {pokemons.map((pokemon) => (
          <li
            key={pokemon.name}
            className={`m-5 ${
              selectedPokemon === pokemon.name
                ? "text-white bg-slate-600 p-2"
                : "text-gray-500"
            } ${isAnimating ? "animate-pulse" : ""}`}
          >
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center mt-20 w-full">
        <button
          onClick={handleStart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isAnimating}
        >
          <p>Start</p>
        </button>
      </div>
      <ModalSuccessCatch
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedPokemon={selectedPokemon}
      />
    </Main>
  );
};

export default PokemonList;
