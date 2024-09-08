import React from "react";
import NavbarComponent from "../components/Navbar";

function Main(props) {
  const { children } = props;
  return (
    <div className="h-full p-3 bg-blue-700 w-full">
      <NavbarComponent />
      <div className="w-full bg-blue-700 h-screen">{children}</div>
    </div>
  );
}

export default Main;
