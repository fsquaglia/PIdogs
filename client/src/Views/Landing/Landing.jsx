import React from "react";
import imgDogsBG from "../../Assets/dogs_backgroundLanding.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
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
  const onClick = () => {
    navigate("/home");
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <p>Siguen siendo el mejor amigo</p>
        <button onClick={onClick}>Ingresar</button>
      </div>
    </div>
  );
};

export default Landing;
