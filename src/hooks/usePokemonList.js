import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../redux/pokemonSlice";

const useListPokemon = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.list);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const handleStart = () => {
    setIsAnimating(true);
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      setSelectedPokemon(pokemons[randomIndex].name);
      count++;

      if (count === 5) {
        clearInterval(interval);
        setTimeout(() => {
          const finalIndex = Math.floor(Math.random() * pokemons.length);
          setSelectedPokemon(pokemons[finalIndex].name);
          setIsAnimating(false);
          setTimeout(() => {
            setOpenModal(true);
          }, 500);
        }, 500);
      }
    }, 300);
  };

  return {
    dispatch,
    pokemons,
    selectedPokemon,
    isAnimating,
    openModal,
    setOpenModal,
    handleStart,
  };
};

export default useListPokemon;
