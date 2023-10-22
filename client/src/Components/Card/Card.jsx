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
        {props.name && <h3>{props.name}</h3>}
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
          {props.name && <h3>{props.name}</h3>}
          {props.temperament && <p>Temperamentos: {props.temperament}</p>}
          {props.weight && <p>Peso: {props.weight}</p>}
          {props.height && <p>Altura: {props.height}</p>}
          {props.life_span && <p>Años de vida: {props.life_span}</p>}
        </DivTextDetailDog>
      </CenteredDiv>
    );
  }
};

export default Card;
