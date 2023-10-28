import styled, { keyframes } from "styled-components";
import imgDogsBG from "./Assets/dogs_backgroundLanding.png";

//constantes
const textBlackColor = "#111111";
const principalColor = "#ff9800";
//principal"#ff9800" - verde #4DCF5B - azul #2596be

const fontCalibri = "Calibri, sans-serif";

//! animacion
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

//! Utilizado para los button con hover
export const Button = styled.button`
  width: 7em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1.2px solid ${principalColor};
  border-radius: 5px;
  transition: background-color 0.5s, color 0.5s;
  font-family: ${fontCalibri};
  font-size: 16px;
  &:hover {
    background-color: ${principalColor};
    color: white;
  }
`;

//! En uso Navbar
export const TitleContainer = styled.div`
  align-items: center;
  /* color: #ffffff; */
`;

//! En uso en Landing
export const ContainerDiv = styled.div`
  background-image: url(${imgDogsBG});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  color: ${textBlackColor};
`;

//! En uso en Landing
export const ContentDiv = styled.div`
  margin-left: 90px;
`;

//! En uso en Landing
export const TextP = styled.p`
  font-family: ${fontCalibri};
  font-size: 24px;
  color: ${textBlackColor};
  animation: ${slideInAnimation} 1s;
`;

//! En uso para todos los input
export const Input = styled.input`
  width: 9em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid ${principalColor};
  border-radius: 5px;
`;

//! En uso para Input de mayor tamaño
export const InputBig = styled.input`
  width: 12em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid ${principalColor};
  border-radius: 5px;
  text-align: center;
`;

//! En uso Select filtro y orden Home
export const Select = styled.select`
  width: 9em;
  margin: 0.5em;
  height: 2em;
  background-color: #ffffff;
  border: 1px solid ${principalColor};
  border-radius: 5px;
`;

//! En uso para Cards
export const DivCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

//! DIV contenedor de la Card
export const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1.2px solid ${principalColor};
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: ${principalColor};
    color: white;
  }
`;

//! Imagen del dog en Card
export const StyleImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 8px;
`;

//! Img del dog en detail
export const StyleImageDet = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 8px;
`;

//! En uso en Cards, margen entre tarjetas
export const CardMargin = styled.div`
  margin: 10px;
`;

//! Botones de paginacion en Cards
export const PaginationButton = styled.button`
  font-family: ${fontCalibri};
  font-size: 16px;
  color: ${textBlackColor};
  border: 1px solid ${principalColor};
  cursor: pointer;
  margin: 2px;
  border-radius: 2px;
  width: 30px;
  text-align: center;
`;

//! En uso para estilos de imágenes no seleccionadas
export const StyledImage = styled.img`
  border-radius: 5px;
  max-width: 100px;
  margin: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;
  &:hover {
    background-color: ${principalColor};
    color: white;
  }
  /* Estilos para imágenes seleccionadas */
  &.selected {
    border-color: #007bff;
  }
`;

//! Estilo de los span de errores
export const ErrorMessage = styled.span`
  color: ${principalColor};
  font-size: 16px;
  font-family: ${fontCalibri};
`;

//! Estilo de span para los Select de filtro y orden
export const StyledBlackSpan = styled.span`
  font-size: 16px;
  color: ${textBlackColor};
  font-family: ${fontCalibri};
`;

//! Estilo del form en componente Form
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//! En uso para Form
export const VerticalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 700px;
  border: 1px solid ${principalColor};
  border-radius: 5px;
  padding: 10px;
`;

//! En uso para form
export const VerticalConteinerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

//! En uso para Form
export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 40%;
  gap: 10px;
  text-align: left;
  width: 700px;
  align-items: center;
`;

//! En uso para SubForm
export const ContainerDivSubForm = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 700px;
`;

//! En uso para SubForm
export const StyledTemperamentList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  width: 300px;
  /* display: grid; */
  /* grid-template-columns: 50% 50%; */
  color: ${textBlackColor};
  font-family: ${fontCalibri};
  cursor: pointer;
`;
//! Div centrado en uso en Card
export const CenteredDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 850px;
  max-width: 100%;
`;

//! Div con borde derecho para el Detail
export const DIVbordeDerecho = styled.div`
  border-right: 4px solid ${principalColor};
  padding: 25px;
`;

//! DIV de texto del dog en Detail
export const DivTextDetailDog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

//! Usado en ViewAbout
export const StyledH1 = styled.h1`
  color: ${textBlackColor};
  font-family: ${fontCalibri};
`;

//! Usado en ViewAbout, Detail
export const StyledH2 = styled.h2`
  color: ${textBlackColor};
  font-family: ${fontCalibri};
`;

//! Usado en Card
export const StyledH3 = styled.h3`
  color: ${textBlackColor};
  font-family: ${fontCalibri};
`;

//! En uso para SubForm
export const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//! Usado en Form
export const StyledLabel = styled.label`
  color: ${textBlackColor};
  font-family: ${fontCalibri};
  font-size: 16px;
`;

//! En uso Navbar, divide en 3 columnas el contenido
export const ConteinerNavDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

//! En uso Navbar, centra el contenido
export const ContentNavDiv = styled.div`
  margin: 0 auto;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

//! Usado en Navbar y Card
export const StyledLikeP = styled.p`
  margin: 0px 10px;
  height: 40px;
  width: auto;
  cursor: pointer;
  transition: transform 0.6s;
  color: ${textBlackColor};
  font-family: ${fontCalibri};
  font-size: 16px;
  &:hover {
    transform: scale(1.4);
  }
`;

//! Usado en Navbar y Card
export const StyledLikeP1 = styled.p`
  margin: 0px 10px;
  height: 40px;
  width: auto;
  cursor: pointer;
  transition: transform 0.6s;
  color: ${textBlackColor};
  font-family: ${fontCalibri};
  font-size: 16px;
`;
//! Usado en ViewAbout, SubForm, Card
export const StyledP = styled.p`
  color: ${textBlackColor};
  font-family: ${fontCalibri};
  font-size: 16px;
`;

//!usado en fav y delete de las card
export const StyledDivCard = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 300px;
`;

//!en uso en div fav y del Card
export const StyledFavDel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
