import React from "react";
import imgFer01 from "../../Assets/fer00.png";
import { StyledH1, StyledH2, StyledP } from "../../styles";

function ViewAbout() {
  return (
    <div>
      <StyledH1>Fernando Squaglia</StyledH1>
      <StyledP>Creador de esta App</StyledP>

      <img src={imgFer01} alt="Imagen Fer" />

      <StyledH2>Full Stack Developer || React || Redux || Node || SQL</StyledH2>
    </div>
  );
}

export default ViewAbout;
