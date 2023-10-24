import React from "react";
import imgNotDog from "../../Assets/imgNotDog.png";
import { Link, useLocation } from "react-router-dom";
import {
  CardContainer,
  StyleImage,
  StyleImageDet,
  CenteredDiv,
  DIVbordeDerecho,
  DivTextDetailDog,
  StyledH3,
  StyledP,
} from "../../styles";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

const Card = (props) => {
  let imgRout;
  if (props.image) {
    //viene algo en image, viene de API o de BD?
    if (props.image.includes("http")) {
      //Dog de la BD
      imgRout = props.image;
    } else {
      //Dog de la API
      imgRout = ENDIMGS + props.image + ".jpg";
    }
  } else {
    //no viene nada en image
    imgRout = imgNotDog;
  }

  if (useLocation().pathname === "/home") {
    //*mostramos en el home/cards
    return (
      <CardContainer>
        {props.name && <StyledH3>{props.name}</StyledH3>}
        <Link to={`/details/${props.id}`}>
          {props.image ? (
            <StyleImage
              src={imgRout}
              alt="Dogs"
              onError={(e) => {
                e.target.src = imgNotDog;
              }}
            />
          ) : (
            <StyleImage src={imgNotDog} alt="Dogs" />
          )}
        </Link>
        {props.temperament && <p>Temperamentos: {props.temperament}</p>}
        {props.weight && <p>Peso: {props.weight}</p>}
      </CardContainer>
    );
  } else {
    //*mostramos en el Detail
    return (
      <CenteredDiv>
        <DIVbordeDerecho>
          {props.image ? (
            <StyleImageDet
              src={imgRout}
              alt="Dogs"
              onError={(e) => {
                e.target.src = imgNotDog;
              }}
            />
          ) : (
            <StyleImageDet src={imgNotDog} alt="Dogs" />
          )}
        </DIVbordeDerecho>
        <DivTextDetailDog>
          {props.name && <StyledH3>{props.name}</StyledH3>}
          {props.temperament && (
            <StyledP>Temperamentos: {props.temperament}</StyledP>
          )}
          {props.weight && <StyledP>Peso: {props.weight}</StyledP>}
          {props.height && <StyledP>Altura: {props.height}</StyledP>}
          {props.life_span && (
            <StyledP>Años de vida: {props.life_span}</StyledP>
          )}
        </DivTextDetailDog>
      </CenteredDiv>
    );
  }
};

export default Card;
