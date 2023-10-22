import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { Link } from "react-router-dom";
import { Button, TitleContainer } from "../../styles";

const NavBar = () => {
  return (
    <>
      <TitleContainer>
        <h2>Encuentra tu dog friend!</h2>
      </TitleContainer>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr", // Divide el espacio en 3 fracciones iguales
          gap: "10px", // Espacio entre los divs hijos
        }}
      >
        <div
          style={{
            margin:
              "0 auto" /* Margen automático para centrar horizontalmente */,
            textAlign: "center" /* Centrar el contenido de forma horizontal */,
          }}
        >
          <Link to={"/home"}>
            <Button type="button">Home</Button>
          </Link>
          <Link to={"/form"}>
            <Button type="button">Nueva Raza</Button>
          </Link>
        </div>
        <div
          style={{
            margin:
              "0 auto" /* Margen automático para centrar horizontalmente */,
            textAlign: "center" /* Centrar el contenido de forma horizontal */,
          }}
        >
          <Searchbar />
        </div>
        <div
          style={{
            margin:
              "0 auto" /* Margen automático para centrar horizontalmente */,
            textAlign: "center" /* Centrar el contenido de forma horizontal */,
          }}
        >
          <Link to={"/viewAbout"}>
            <Button type="button">About</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
