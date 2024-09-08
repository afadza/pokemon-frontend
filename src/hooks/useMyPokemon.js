import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyPokemons,
  releasePokemon,
  renamePokemon,
} from "../redux/pokemonSlice";

const useMyPokemon = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);
  const [openModal, setOpenModal] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchMyPokemons());
  }, [dispatch]);

  const [rename, setRename] = useState({ id: "", newName: "" });

  const handleRelease = (id) => {
    dispatch(releasePokemon(id));
  };

  const handleRename = (id) => {
    if (rename.newName.trim() === "") {
      alert("Name cannot be empty");
      return;
    }
    dispatch(renamePokemon(id, rename.newName));
    setRename({ id: "", newName: "" });
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pokemonData.image.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pokemonData.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return {
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
  };
};

export default useMyPokemon;
