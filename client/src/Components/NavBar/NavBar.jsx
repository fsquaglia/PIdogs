import React, { useEffect, useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  TitleContainer,
  StyledH2,
  ConteinerNavDiv,
  ContentNavDiv,
  StyledP,
  StyledLikeP,
} from "../../styles";
import { likesConut } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const likesCount = useSelector((state) => state.likesCount);

  const [like, setLike] = useState("🤍");
  const [likePulsed, setLikePulsed] = useState(false);
  const [textCountLikes, setTextCountLikes] = useState("");

  const handleLike = () => {
    //una vez que se pulsó like ya no se ejecuta la acción en esta instancia de navegacion
    if (!likePulsed) {
      setLike("❤️");
      dispatch(likesConut());
      setLikePulsed(true);
    }
  };
  useEffect(() => {
    if (likePulsed) {
      setTextCountLikes(` | ${likesCount} Likes 🐶`);
    }
  }, [likesCount, likePulsed]);

  return (
    <div>
      <TitleContainer>
        <StyledH2>Encuentra tu dog friend!</StyledH2>
      </TitleContainer>

      <ConteinerNavDiv>
        <ContentNavDiv>
          <Link to={"/home"}>
            <Button type="button">Home</Button>
          </Link>
          <Link to={"/form"}>
            <Button type="button">Nueva Raza</Button>
          </Link>
        </ContentNavDiv>
        <ContentNavDiv>
          {location.pathname === "/home" && <Searchbar />}
        </ContentNavDiv>
        <ContentNavDiv>
          <StyledP>Doglike! </StyledP>
          <StyledLikeP onClick={handleLike}>{like}</StyledLikeP>
          <StyledP>{textCountLikes}</StyledP>

          <Link to={"/viewAbout"}>
            <Button type="button">About</Button>
          </Link>
        </ContentNavDiv>
      </ConteinerNavDiv>
    </div>
  );
};

export default NavBar;
