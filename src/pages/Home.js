import React from "react";
import Main from "../layout/Main";
import HomePokemon from "../assets/images/home-pokemon.png";

function Home() {
  return (
    <Main>
      <div className="flex flex-col justify-center items-center mt-40 h-screen">
        <img src={HomePokemon} alt="pokemon ball" />
        <div className="mt-10 items-center">
          <p className="text-3xl text-white">Welcome 👋</p>
          <a
            href="/pokemon-list"
            aria-current="page"
            className="text-3xl text-white"
          >
            Lets Play !
          </a>
        </div>
      </div>
    </Main>
  );
}

export default Home;
