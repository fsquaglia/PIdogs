import React from "react";
import imgFer01 from "../../Assets/fer00.png";
import styled from "styled-components";

const StyledAbout = styled.h1`
  color: #000000;
  font-family: "Calibri", sans-serif;
`;
const StyledP = styled.p`
  color: #000000;
  font-family: "Calibri", sans-serif;
`;

function ViewAbout() {
  return (
    <div>
      <StyledAbout>Fernando Squaglia</StyledAbout>
      <StyledP>Creador de esta App</StyledP>
      <p>
        <img src={imgFer01} alt="Imagen Fer" />
      </p>
    </div>
  );
}

export default ViewAbout;
