import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import {
  Button,
  TitleContainer,
  StyledH2,
  ConteinerNavDiv,
  ContentNavDiv,
} from "../../styles";

const NavBar = () => {
  return (
    <>
      <TitleContainer>
        <StyledH2>Encuentra tu dog friend!</StyledH2>
      </TitleContainer>

      <ConteinerNavDiv>
        <ContentNavDiv>
          <Link to={"/home"}>
            <Button type="button">Home</Button>
          </Link>
          <Link to={"/form"}>
            <Button type="button">Nueva Raza</Button>
          </Link>
        </ContentNavDiv>
        <ContentNavDiv>
          <Searchbar />
        </ContentNavDiv>
        <ContentNavDiv>
          <Link to={"/viewAbout"}>
            <Button type="button">About</Button>
          </Link>
        </ContentNavDiv>
      </ConteinerNavDiv>
    </>
  );
};

export default NavBar;
