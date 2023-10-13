import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to={"/home"}>
        <button type="button">Home</button>
      </Link>
      <Link to={"/form"}>
        <button type="button">Nueva Raza</button>
      </Link>

      <Searchbar />
    </div>
  );
};

export default NavBar;
