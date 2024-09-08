import React from "react";
import Main from "../layout/Main";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import usePokemonDetail from "../hooks/usePokemonDetail";
import ModalSuccessAdd from "./components/ModalSuccessAdd";

const PokemonDetail = () => {
  const {
    dispatch,
    pokemon,
    spriteKeys,
    currentIndex,
    handlePrevious,
    handleNext,
    openModal,
    setOpenModal,
    addPokemon,
  } = usePokemonDetail();

  return (
    <Main>
      <div className="w-full flex flex-col justify-center items-center text-white h-screen">
        {pokemon && (
          <>
            <div className="flex flex-row items-center">
              <button onClick={handlePrevious}>
                <FaAngleLeft className="" />
              </button>
              <img
                src={pokemon.sprites[spriteKeys[currentIndex]]}
                alt={pokemon.name}
                className="w-40 h-40"
              />
              <button onClick={handleNext}>
                <FaAngleRight className="" />
              </button>
            </div>

            <p className="">{pokemon.name.toUpperCase()}</p>

            <div className="mt-10">
              <p>
                Type:{" "}
                <span className="capitalize  p-1">
                  {pokemon.types.map((type) => type.type.name).join(", ")}
                </span>
              </p>
              <p className="mt-2">
                Moves:
                <span className="capitalize p-1 ml-2">
                  {pokemon.moves
                    .slice(0, 5)
                    .map((move) => move.move.name)
                    .join(", ")}
                </span>
              </p>
            </div>

            <button
              onClick={() => {
                const filteredSprites = Object.keys(pokemon.sprites)
                  .filter((key) => typeof pokemon.sprites[key] === "string")
                  .map((key) => pokemon.sprites[key]);
                dispatch(
                  addPokemon({
                    ...pokemon.species,
                    id: Date.now(),
                    image: filteredSprites,
                  })
                );
                setOpenModal(true);
              }}
              className="mt-10 bg-blue-400 p-4 rounded"
            >
              Add to My Pokemon
            </button>
          </>
        )}
      </div>
      <ModalSuccessAdd openModal={openModal} setOpenModal={setOpenModal} />
    </Main>
  );
};

export default PokemonDetail;
