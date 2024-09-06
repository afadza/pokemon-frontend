import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyPokemons,
  releasePokemon,
  renamePokemon,
} from "../redux/pokemonSlice";

const MyPokemonList = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.pokemon.myPokemons);

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

  return (
    <div>
      <h1>My Pokemon List</h1>
      <ul>
        {myPokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <span>{pokemon.name}</span>
            <button onClick={() => handleRelease(pokemon.id)}>Release</button>
            <button
              onClick={() =>
                setRename({
                  id: pokemon.id,
                  newName: prompt("Enter new name:"),
                })
              }
            >
              Rename
            </button>
            {rename.id === pokemon.id && (
              <div>
                <input
                  type="text"
                  value={rename.newName}
                  onChange={(e) =>
                    setRename({ ...rename, newName: e.target.value })
                  }
                />
                <button onClick={() => handleRename(pokemon.id)}>Submit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPokemonList;
