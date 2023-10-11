import React from "react";
import styled from "styled-components";
import imgNotDog from "../../Assets/imgNotDog.png";
import { Link } from "react-router-dom";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

//!estilos con styled-component
const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

const Card = (props) => {
  const imgRout = ENDIMGS + props.image + ".jpg";
  const handleError = (e) => {
    e.target.src = imgNotDog;
  };

  return (
    <div>
      <h3>soy card!!</h3>
      <h3>{props.name}</h3>
      <Link to={`/details/${props.id}`}>
        <StyleImage src={imgRout} alt="Image dogs" onError={handleError} />
      </Link>
      <p>Temperamentos: {props.temperament}</p>
      <p>Peso: {props.weight}</p>
    </div>
  );
};

export default Card;
