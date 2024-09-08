import React from "react";
import Main from "../layout/Main";
import useMyPokemon from "../hooks/useMyPokemon";
import ModalMyPokemon from "./components/ModalMyPokemon";

const MyPokemonList = () => {
  const {
    myPokemons,
    openModal,
    setOpenModal,
    pokemonData,
    setPokemonData,
    rename,
    setRename,
    handleRelease,
    handleRename,
    handlePrevious,
    handleNext,
    currentIndex,
  } = useMyPokemon();

  return (
    <Main>
      <div className="h-screen">
        <h1 className="text-white mt-10">My Pokemon List</h1>
        <ul>
          {myPokemons.map((pokemon, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setPokemonData(pokemon);
                  setOpenModal(true);
                }}
              >
                <span className="text-white">{pokemon.name}</span>
              </button>
              <button
                onClick={() => handleRelease(pokemon.id)}
                className="mt-10 bg-blue-400 p-1 rounded ml-10 text-white"
              >
                Release
              </button>
              <button
                className="mt-10 bg-blue-400 p-1 rounded ml-2 text-white"
                onClick={() => {
                  setRename({
                    id: pokemon.id,
                    newName: pokemon.name,
                  });
                }}
              >
                Rename
              </button>
              {rename.id === pokemon.id && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={rename.newName}
                    onChange={(e) =>
                      setRename({ ...rename, newName: e.target.value })
                    }
                  />
                  <button
                    onClick={() => handleRename(pokemon.id)}
                    className="bg-blue-400 p-1 rounded ml-2 text-white"
                  >
                    Submit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <ModalMyPokemon
          openModal={openModal}
          setOpenModal={setOpenModal}
          pokemonData={pokemonData}
          currentIndex={currentIndex}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </Main>
  );
};

export default MyPokemonList;
