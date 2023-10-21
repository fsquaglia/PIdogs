import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { Button, NavContainer, TitleContainer } from "../../styles";

const NavBar = () => {
  return (
    <>
      <TitleContainer>
        <h2>Encuentra tu dog friend!</h2>
      </TitleContainer>

      <NavContainer>
        <div>
          <Link to={"/home"}>
            <Button type="button">Home</Button>
          </Link>
          <Link to={"/form"}>
            <Button type="button">Nueva Raza</Button>
          </Link>
        </div>
        <Searchbar />
        <div>
          <Link to={"/viewAbout"}>
            <Button type="button">About</Button>
          </Link>
        </div>
      </NavContainer>
    </>
  );
};

export default NavBar;
