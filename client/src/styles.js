import styled, { keyframes } from "styled-components";
import imgDogsBG from "./Assets/dogs_backgroundLanding.png";
const slideInAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const Button = styled.button`
  width: 7em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1.2px solid #ff9800;
  border-radius: 5px;
  transition: background-color 0.5s, color 0.5s;
  font-family: "Calibri", sans-serif;
  font-size: 16px;
  &:hover {
    background-color: #ff9800;
    color: white;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
`;
export const TitleContainer = styled.div`
  align-items: center;
  /* color: #ffffff; */
`;
export const ContainerDiv = styled.div`
  background-image: url(${imgDogsBG});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  color: black;
`;
export const ContentDiv = styled.div`
  margin-left: 90px;
`;
export const TextP = styled.p`
  font-family: "Calibri", sans-serif;
  font-size: 24px;
  color: black;
  animation: ${slideInAnimation} 1s;
`;
export const Input = styled.input`
  width: 9em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
`;
export const Select = styled.select`
  width: 9em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
`;
export const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

//DIV congenedor de las card home
export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1.2px solid #ff9800;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: #ff9800;
    color: white;
  }
`;

//DIV contenedor de la card detail
export const CardContainerDetail = styled.div`
  width: 400px;
  height: 400px;
  border: 1.2px solid #ff9800;
  padding: 10px;
  border-radius: 12px;
  transition: background-color 0.5s, color 0.5s;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

//img del detail
export const StyleImageDet = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 8px;
`;

//margen entre tarjetas
export const CardMargin = styled.div`
  margin: 10px;
`;

//botones de paginacion
export const PaginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: #ff9800;
    color: white;
  }
`;

/* Estilos para imágenes no seleccionadas */
export const StyledImage = styled.img`
  border-radius: 5px;
  max-width: 100px;
  margin: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: #ff9800;
    color: white;
  }
  /* Estilos para imágenes seleccionadas */
  &.selected {
    border-color: #007bff; /* Cambia el color del borde para resaltar la imagen seleccionada */
  }
`;

//estilo del div que contiene altura peso y anos de vida
export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

//!estilo de los span de errores
export const ErrorMessage = styled.span`
  color: #ff9800;
  font-size: 16px;
`;
//!estilo de los span de errores
export const ErrorMessageLeft = styled.span`
  color: #ff9800;
  font-size: 16px;
`;

//estilo del form en componente Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const VerticalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 700px;
  border: 1px solid #ff9800;
  border-radius: 5px;
  padding: 10px;
`;

export const VerticalConteinerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
  gap: 10px;
  text-align: left;
  width: 700px;
  align-items: center;
`;

export const ContainerDivSubForm = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 700px;
`;

export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DIVbordeDerecho = styled.div`
  border-right: 4px solid #ff9800;
  padding: 25px;
`;

export const DivTextDetailDog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
`;
