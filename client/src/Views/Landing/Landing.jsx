import React, { useEffect, useState } from "react";
import imgDogsBG from "../../Assets/dogs_backgroundLanding.png";
import { useNavigate } from "react-router-dom";
import { allDogs, allTemperaments } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { data_loaded } from "../../Redux/actions";

const Landing = () => {
  const dataLoaded = useSelector((state) => state.dataLoaded);
  const containerStyle = {
    backgroundImage: `url(${imgDogsBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: "black",
  };

  const contentStyle = {
    marginLeft: "50px", // Margen a la izquierda para el contenido
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true); // Estado local para controlar la habilitación del botón

  //evento al hacer clic en el boton para ingresar
  const onClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    console.log("hola");
    if (!dataLoaded) {
      const delay = 1000;
      setTimeout(() => {
        // Realizar las llamadas a las acciones de Redux
        dispatch(allDogs());
        dispatch(allTemperaments());
        setButtonDisabled(false);
        dispatch(data_loaded(true));
      }, delay);
    }
  }, [dispatch, dataLoaded]);

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p>Siguen siendo el mejor amigo</p>
        <button onClick={onClick} disabled={buttonDisabled}>
          Ingresar
        </button>
      </div>
    </div>
  );
};

export default Landing;
