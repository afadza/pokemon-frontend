import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import PokemonLogo from "../assets/images/pokemon-ball.png";

const NavbarComponent = () => {
  const location = useLocation();

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/">
        <img
          src={PokemonLogo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pokemon
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/my-pokemon"
          active={location.pathname === "/my-pokemon"}
        >
          My Pokemon
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/pokemon-list"
          active={location.pathname === "/pokemon-list"}
        >
          Catch Pokemon
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
