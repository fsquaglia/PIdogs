import React, { useState } from "react";
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
  StyledLikeP,
} from "../../styles";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

const Card = (props) => {
  //truncamos el texto de temperaments si es demasiado largo
  const MAX_TEMPERAMENT_LENGTH = 50;
  const truncatedTemperament = props.temperament
    ? props.temperament.length > MAX_TEMPERAMENT_LENGTH
      ? props.temperament.slice(0, MAX_TEMPERAMENT_LENGTH) + "..."
      : props.temperament
    : "";

  //!+++++++++++++
  const [fav, setFav] = useState("🤍");
  const handleFav = () => {
    //una vez que se pulsó like ya no se ejecuta la acción en esta instancia de navegacion
    // if (!likePulsed) {
    //   setLike("❤️");
    //   dispatch(likesConut());
    //   setLikePulsed(true);
    // }
  };
  // useEffect(() => {
  //   if (likePulsed) {
  //     setTextCountLikes(` | ${likesCount} Likes 🐶`);
  //   }
  // }, [likesCount, likePulsed]);
  //!-------------

  //tratamiento de la imagen a mostrar en la Card
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
        <StyledLikeP onClick={handleFav}>{fav}</StyledLikeP>
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
        {props.temperament && (
          <StyledP>Temperamentos: {truncatedTemperament}</StyledP>
        )}
        {props.weight && <StyledP>Peso: {props.weight}</StyledP>}
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
