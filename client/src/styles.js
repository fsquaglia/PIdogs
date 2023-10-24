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
//!utilizado para los button con hover
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

// export const NavContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px;
//   background-color: #ffffff;
// `;

//! en uso Navbar
export const TitleContainer = styled.div`
  align-items: center;
  /* color: #ffffff; */
`;

//!en uso en Landing
export const ContainerDiv = styled.div`
  background-image: url(${imgDogsBG});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  color: black;
`;

//!en uso en Landing
export const ContentDiv = styled.div`
  margin-left: 90px;
`;

//!en uso en Landing
export const TextP = styled.p`
  font-family: "Calibri", sans-serif;
  font-size: 24px;
  color: black;
  animation: ${slideInAnimation} 1s;
`;

//! en uso para todos los input
export const Input = styled.input`
  width: 9em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
`;

//! en uso para Input de mayor tamaño
export const InputBig = styled.input`
  width: 12em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
  text-align: center;
`;

//!en uso Select filtro y orden Home
export const Select = styled.select`
  width: 9em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid #ff9800;
  border-radius: 5px;
`;

//!en uso para Cards
export const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

//!DIV contenedor de la Card
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
// export const CardContainerDetail = styled.div`
//   width: 400px;
//   height: 400px;
//   border: 1.2px solid #ff9800;
//   padding: 10px;
//   border-radius: 12px;
//   transition: background-color 0.5s, color 0.5s;
//   display: grid;
//   justify-content: center;
//   align-items: center;
// `;

//!Imagen del dog en Card
export const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

//!img del dog en detail
export const StyleImageDet = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 8px;
`;

//!en uso en Cards, margen entre tarjetas
export const CardMargin = styled.div`
  margin: 10px;
`;

//!botones de paginacion en Cards
export const PaginationButton = styled.button`
  font-family: "Calibri", sans-serif;
  font-size: 16px;
  color: #111111;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: #ff9800;
    color: white;
  }
`;

//! en uso para estilos de imágenes no seleccionadas
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
// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 5px;
// `;

//!estilo de los span de errores
export const ErrorMessage = styled.span`
  color: #ff9800;
  font-size: 16px;
  font-family: "Calibri", sans-serif;
`;

//estilo de los span de errores
// export const ErrorMessageLeft = styled.span`
//   color: #ff9800;
//   font-size: 16px;
// `;

//!estilo de span para los Select de filtro y orden
export const StyledBlackSpan = styled.span`
  font-size: 16px;
  color: #111111;
  font-family: "Calibri", sans-serif;
`;

//!estilo del form en componente Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//!en uso para Form
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

//!en uso para form
export const VerticalConteinerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//!en uso para Form
export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
  gap: 10px;
  text-align: left;
  width: 700px;
  align-items: center;
`;

//! en uso para SubForm
export const ContainerDivSubForm = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 700px;
`;

//!Div centrado uso en Card
export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

//!Div con borde derecho para el Detail
export const DIVbordeDerecho = styled.div`
  border-right: 4px solid #ff9800;
  padding: 25px;
`;

//!DIV de texto del dog en Detail
export const DivTextDetailDog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
`;

//!usado en ViewAbout
export const StyledH1 = styled.h1`
  color: #111111;
  font-family: "Calibri", sans-serif;
`;
//!usado en ViewAbout, Detail
export const StyledH2 = styled.h2`
  color: #111111;
  font-family: "Calibri", sans-serif;
`;

//!usado en Card
export const StyledH3 = styled.h3`
  color: #111111;
  font-family: "Calibri", sans-serif;
`;

//!usado en ViewAbout, SubForm, Card
export const StyledP = styled.p`
  color: #111111;
  font-family: "Calibri", sans-serif;
  font-size: 16px;
`;

//! en uso para SubForm
export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//! en uso para SubForm
export const StyledTemperamentList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  width: 300px;
  display: grid;
  grid-template-columns: 50% 50%;
  color: #111111;
  font-family: "Calibri", sans-serif;
`;

//!usado en Form
export const StyledLabel = styled.label`
  color: #111111;
  font-family: "Calibri", sans-serif;
  font-size: 16px;
`;

//!en uso Navbar, divide en 3 columnas el contenido
export const ConteinerNavDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

//!en uso Navbar, centra el contenido
export const ContentNavDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;
