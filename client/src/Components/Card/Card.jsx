import React from "react";
import styled from "styled-components";
import imgNotDog from "../../Assets/imgNotDog.png";
import { Link, useLocation } from "react-router-dom";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

//!estilos con styled-component
const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

const Card = (props) => {
  const imgRout = props.image ? ENDIMGS + props.image + ".jpg" : imgNotDog; //ruta de la imagen

  //manejo del error si no responde la URL de la img
  //cargamos img alternativa
  const handleError = (e) => {
    e.target.src = imgNotDog;
  };

  if (useLocation().pathname === "/home") {
    //renderizado desde las Cards Home
    return (
      <div>
        <h3>{props.name}</h3>
        <Link to={`/details/${props.id}`}>
          <StyleImage src={imgRout} alt="Image dogs" onError={handleError} />
        </Link>
        <p>Temperamentos: {props.temperament}</p>
        <p>Peso: {props.weight}</p>
      </div>
    );
  } else {
    return (
      //renderizado del details
      <div>
        <h3>{props.name}</h3>
        <StyleImage src={imgRout} alt="Image dogs" onError={handleError} />
        <p>Temperamentos: {props.temperament}</p>
        <p>Peso: {props.weight}</p>
        <p>Altura: {props.height}</p>
        <p>Años de vida: {props.life_span}</p>
        <p></p>
      </div>
    );
  }
};

export default Card;

//!componente details
// key={dogDetail.id}
// id={dogDetail.id}
// name={name}
// temperament={temperament}
// weight={weight}
// image={reference_image_id}
// height={height}
// life_span={life_span}

//!componente Cards
// Imagen.
// Nombre.
// Temperamentos.
// Peso.
