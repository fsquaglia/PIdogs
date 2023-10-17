import React from "react";
import styled from "styled-components";
import imgNotDog from "../../Assets/imgNotDog.png";
import { Link, useLocation } from "react-router-dom";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

const CardContainer = styled.div`
  width: 300px; /* Establece el ancho deseado para la tarjeta */
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  /* Agrega otros estilos según tus preferencias */
`;

const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

const Card = (props) => {
  const imgRout = props.image ? ENDIMGS + props.image + ".jpg" : imgNotDog;

  if (useLocation().pathname === "/home") {
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
    return (
      <CardContainer>
        {props.name && <h3>{props.name}</h3>}

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
        {props.temperament && <p>Temperamentos: {props.temperament}</p>}
        {props.weight && <p>Peso: {props.weight}</p>}
        {props.height && <p>Altura: {props.height}</p>}
        {props.life_span && <p>Años de vida: {props.life_span}</p>}
      </CardContainer>
    );
  }
};

export default Card;
