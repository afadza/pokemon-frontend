import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [],
    myPokemons: [],
    currentPokemon: null,
  },
  reducers: {
    setPokemonList(state, action) {
      state.list = action.payload;
    },
    setMyPokemons(state, action) {
      state.myPokemons = action.payload;
    },
    setCurrentPokemon(state, action) {
      state.currentPokemon = action.payload;
    },
    addPokemonToMyList(state, action) {
      state.myPokemons.push(action.payload);
    },
    removePokemonFromMyList(state, action) {
      state.myPokemons = state.myPokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
    renamePokemonInMyList(state, action) {
      state.myPokemons = state.myPokemons.map((pokemon) =>
        pokemon.id === action.payload.id
          ? { ...pokemon, name: action.payload.newName }
          : pokemon
      );
    },
  },
});

export const {
  setPokemonList,
  setMyPokemons,
  setCurrentPokemon,
  addPokemonToMyList,
  removePokemonFromMyList,
  renamePokemonInMyList,
} = pokemonSlice.actions;

export const fetchPokemons = () => async (dispatch) => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  dispatch(setPokemonList(response.data.results));
};

export const fetchMyPokemons = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/my-pokemons");
    const data = await response.json();
    dispatch(setMyPokemons(data));
  } catch (error) {
    console.error("Error fetching my pokemons:", error);
  }
};

export const fetchPokemonDetail = (id) => async (dispatch) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  dispatch(setCurrentPokemon(response.data));
};

export const catchPokemon = (pokemon) => async (dispatch) => {
  const response = await axios.get("http://localhost:3001/catch");
  if (response.data.success) {
    const nickname = prompt("Give your Pokemon a nickname:");
    if (nickname) {
      console.log(nickname);
      const response = await fetch("http://localhost:3001/add-pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pokemon: {
            species: pokemon.species,
            sprites: pokemon.sprites,
          },
        }),
      });
      console.log(
        "======== RESPONSE ========",
        JSON.stringify(pokemon, null, 4)
      );

      dispatch(addPokemonToMyList({ ...pokemon, nickname }));
    }
  }
};

export const addPokemon = (pokemon) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/add-pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pokemon: pokemon,
      }),
    });

    const data = await response.json();
    dispatch(addPokemonToMyList(data));
  } catch (error) {
    console.error("Error adding pokemon:", error);
  }
};

export const releasePokemon = (id) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/release", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    if (result.success) {
      dispatch(removePokemonFromMyList(id));
    }
  } catch (error) {
    console.error("Error releasing pokemon:", error);
  }
};

export const renamePokemon = (id, newName) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/rename", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, newName }),
    });
    const result = await response.json();
    dispatch(renamePokemonInMyList({ id, newName: result.newName }));
  } catch (error) {
    console.error("Error renaming pokemon:", error);
  }
};

export default pokemonSlice.reducer;
