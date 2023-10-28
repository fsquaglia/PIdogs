import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  allDogs,
  allTemperaments,
  filterAndOrder,
  likes_Dogs,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { data_loaded } from "../../Redux/actions";
import { Button, ContainerDiv, ContentDiv, TextP } from "../../styles";

const Landing = () => {
  const dataLoaded = useSelector((state) => state.dataLoaded);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true); // Estado local para controlar la habilitación del botón

  //evento al hacer clic en el boton para ingresar
  const onClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    if (!dataLoaded) {
      const delay = 1000;
      setTimeout(() => {
        // Realizar las llamadas a las acciones de Redux
        //cargando los estados globales
        dispatch(allDogs()).then(() => dispatch(filterAndOrder()));
        dispatch(allTemperaments());
        setButtonDisabled(false);
        dispatch(data_loaded(true));
        dispatch(likes_Dogs());
      }, delay);
    }
  }, [dispatch, dataLoaded]);

  return (
    <ContainerDiv>
      <ContentDiv>
        <TextP>Siguen siendo nuestro mejor amigo</TextP>
        <Button onClick={onClick} disabled={buttonDisabled}>
          Ingresar
        </Button>
      </ContentDiv>
    </ContainerDiv>
  );
};

export default Landing;
