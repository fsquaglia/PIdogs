import React from "react";
import styled from "styled-components";
import imgNotDog from "../../Assets/imgNotDog.png";
import { Link, useLocation } from "react-router-dom";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

const Card = (props) => {
  // Comprobar si se cargó la imagen con éxito o usar una imagen alternativa en caso de error
  const imgRout = props.image ? ENDIMGS + props.image + ".jpg" : imgNotDog;

  if (useLocation().pathname === "/home") {
    return (
      <div>
        <h3>{props.name}</h3>
        <Link to={`/details/${props.id}`}>
          {/* Usar el atributo onError para manejar errores de carga de imagen */}
          <StyleImage
            src={imgRout}
            alt="Image dogs"
            onError={(e) => {
              e.target.src = imgNotDog; // Cambiar a la imagen alternativa en caso de error
            }}
          />
        </Link>
        <p>Temperamentos: {props.temperament}</p>
        <p>Peso: {props.weight}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>{props.name}</h3>
        <StyleImage
          src={imgRout}
          alt="Image dogs"
          onError={(e) => {
            e.target.src = imgNotDog;
          }}
        />
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
