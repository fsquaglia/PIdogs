import React, { useEffect, useState } from "react";
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
  StyledDivCard,
  StyledFavDel,
  StyledLikeP1,
} from "../../styles";
import { useDispatch, useSelector } from "react-redux";
import {
  allDogs,
  delDog_Like,
  deleteDogById,
  delete_card,
  filterAndOrder,
  like_dog_pulsed,
  likes_Dogs,
  putIncrementLikeDog,
} from "../../Redux/actions";

require("dotenv").config();
const ENDIMGS = process.env.REACT_APP_ENDIMGS;

const Card = (props) => {
  const likeDogPulsed = useSelector((state) => state.likeDogPulsed);
  const likesDogs = useSelector((state) => state.likesDogs);
  const dispatch = useDispatch();
  //truncamos el texto de temperaments si es demasiado largo
  const MAX_TEMPERAMENT_LENGTH = 50;
  const truncatedTemperament = props.temperament
    ? props.temperament.length > MAX_TEMPERAMENT_LENGTH
      ? props.temperament.slice(0, MAX_TEMPERAMENT_LENGTH) + "..."
      : props.temperament
    : "";

  const [favCount, setFavCount] = useState("0");
  let fav = likeDogPulsed.includes(props.id) ? "❤️" : "🤍";

  useEffect(() => {
    likesDogs.forEach((favorit) => {
      if (favorit.id === props.id.toString()) {
        setFavCount(favorit.likes);
      }
    });
  }, [likesDogs]);

  //una vez que se pulsó fav ya no se ejecuta la acción en esta instancia de navegacion
  const handleFav = () => {
    if (!likeDogPulsed.includes(props.id)) {
      dispatch(like_dog_pulsed(props.id));
      dispatch(putIncrementLikeDog(props.id)).then(() =>
        dispatch(likes_Dogs())
      );
    }
  };

  //handle para eliminar la Card
  const handleDelete = async (dogObj) => {
    if (dogObj.origin === "BD") {
      const result = window.confirm(
        "¿Seguro deseas eliminar el dog definitivamente?"
      );
      if (result) {
        try {
          await dispatch(deleteDogById(dogObj.id));
          await dispatch(allDogs());
          await dispatch(filterAndOrder());
          await dispatch(delDog_Like(dogObj.id));
          dispatch(likes_Dogs());
        } catch (error) {
          console.error("Ocurrió un error al eliminar el perro:", error);
        }
      }
    } else {
      await dispatch(delete_card(dogObj.id));
      await dispatch(delDog_Like(dogObj.id));
      dispatch(likes_Dogs());
    }
  };

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
        <StyledDivCard>
          <StyledFavDel>
            <StyledLikeP1>{favCount}</StyledLikeP1>
            <StyledLikeP onClick={handleFav}>{fav}</StyledLikeP>
          </StyledFavDel>
          <div>
            <StyledLikeP onClick={() => handleDelete(props)}>❌</StyledLikeP>
          </div>
        </StyledDivCard>
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
