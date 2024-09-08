import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPokemonDetail,
  catchPokemon,
  addPokemon,
} from "../redux/pokemonSlice";

const usePokemonDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const pokemon = useSelector((state) => state.pokemon.currentPokemon);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchPokemonDetail(id));
  }, [dispatch, id]);

  const handleCatch = () => {
    dispatch(catchPokemon(pokemon));
  };

  const spriteKeys =
    pokemon &&
    Object.keys(pokemon?.sprites).filter((key) => {
      return typeof pokemon.sprites[key] === "string";
    });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? spriteKeys.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === spriteKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  return {
    dispatch,
    pokemon,
    spriteKeys,
    currentIndex,
    handlePrevious,
    handleNext,
    handleCatch,
    openModal,
    setOpenModal,
    addPokemon,
  };
};

export default usePokemonDetail;
