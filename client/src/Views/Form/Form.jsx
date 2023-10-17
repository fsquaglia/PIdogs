import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import validations from "../../utils/validations";
import FormComponent from "./FormComponent";
import { useDispatch, useSelector } from "react-redux";
import { allTemperaments } from "../../Redux/actions";

require("dotenv").config();
const ENDIMGDOGS = process.env.REACT_APP_ENDIMGDOGS;

const StyledImage = styled.img`
  /* Estilos para imágenes no seleccionadas */
  max-width: 100px;
  margin: 5px;
  border: 2px solid transparent;
  cursor: pointer;

  /* Estilos para imágenes seleccionadas */
  &.selected {
    border-color: #007bff; /* Cambia el color del borde para resaltar la imagen seleccionada */
  }
`;

const Form = () => {
  // const dispatch = useDispatch();
  const tempGlobal = useSelector((state) => state.allTemperaments);

  //! Realiza la acción de carga de temps si aún no se han cargado
  // useEffect(() => {
  //   if (tempGlobal.length === 0) {
  //     dispatch(allTemperaments());
  //   }
  // }, [dispatch, tempGlobal]);

  const [selectedImage, setSelectedImage] = useState("");
  const [dogData, setDogData] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    lifeMin: "",
    lifeMax: "",
    image: "",
    selectedTemperaments: [],
  });
  const [errors, setErrors] = useState({});

  //imágenes de dogs para selección
  const dogImages = [
    `${ENDIMGDOGS}dog01.png`,
    `${ENDIMGDOGS}dog02.png`,
    `${ENDIMGDOGS}dog03.png`,
    `${ENDIMGDOGS}dog04.png`,
    `${ENDIMGDOGS}dog05.png`,
    `${ENDIMGDOGS}dog06.png`,
  ];

  //almacen en el estado local la imagen cliqueada
  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL);
    setDogData({ ...dogData, image: imageURL });
    setErrors(validations({ ...dogData, image: imageURL }));
  };

  //!-------------------
  const handleTemperamentToggle = (temperament) => {
    if (dogData.selectedTemperaments.includes(temperament)) {
      let temper = dogData.selectedTemperaments.filter(
        (temp) => temp !== temperament
      );
      setDogData({
        ...dogData,
        selectedTemperaments: temper,
      });
      setErrors(
        validations({
          ...dogData,
          selectedTemperaments: temper,
        })
      );
    } else {
      setDogData({
        ...dogData,
        selectedTemperaments: [...dogData.selectedTemperaments, temperament],
      });
      setErrors(
        validations({
          ...dogData,
          selectedTemperaments: [...dogData.selectedTemperaments, temperament],
        })
      );
    }
  };

  //controlamos la seleccion de temperamentos en FormComponent
  // const handleTemperament = (value) => {
  //   if (value) {
  //     //hay temperamentos seleccionados
  //     setDogData({ ...dogData, temperament: true });
  //     setErrors(validations({ ...dogData, temperament: true }));
  //   } else {
  //     setDogData({ ...dogData, temperament: false });
  //     setErrors(validations({ ...dogData, temperament: false }));
  //   }
  // };

  //!----------------------

  //lógica de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dogData);
  };

  //logica de cambios en inputs
  const handleChange = (event) => {
    const propiedad = event.target.name;
    const value = event.target.value;
    setDogData({ ...dogData, [propiedad]: value });
    setErrors(validations({ ...dogData, [propiedad]: value }));
  };

  function handlePaste(event) {
    event.preventDefault(); // Cancelar el evento de pegado en algunos input
  }

  //anular uso del punto en input de life
  function handleKeyPress(event) {
    const keyValue = event.key;
    if (keyValue === ".") {
      event.preventDefault(); // Cancelar el evento de tecla
    }
  }

  return (
    <div>
      <h2>Crea tu raza</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre de la raza"
          value={dogData.name}
          onChange={handleChange}
        />
        <br />
        <p style={{ color: "#ff9800" }}>{errors.name}</p>
        <br />
        <label htmlFor="height">Altura (cms): </label>
        <input
          type="number"
          name="heightMin"
          id="heightMin"
          placeholder="min"
          value={dogData.heightMin}
          onChange={handleChange}
          onPaste={handlePaste}
        />
        <input
          type="number"
          name="heightMax"
          id="heightMax"
          placeholder="max"
          value={dogData.heightMax}
          onChange={handleChange}
          onPaste={handlePaste}
        />
        <span style={{ color: "#ff9800" }}> {errors.height}</span>
        <br />
        <label htmlFor="weight">Peso (kgs): </label>
        <input
          type="number"
          name="weightMin"
          id="weightMin"
          placeholder="min"
          value={dogData.weightMin}
          onChange={handleChange}
          onPaste={handlePaste}
        />
        <input
          type="number"
          name="weightMax"
          id="weightMax"
          placeholder="max"
          value={dogData.weightMax}
          onChange={handleChange}
          onPaste={handlePaste}
        />{" "}
        <span style={{ color: "#ff9800" }}> {errors.weight}</span>
        <br />
        <label htmlFor="life">Años de vida: </label>
        <input
          type="number"
          name="lifeMin"
          id="lifeMin"
          placeholder="desde"
          value={dogData.lifeMin}
          onChange={handleChange}
          onPaste={handlePaste}
          onKeyDown={handleKeyPress}
        />
        <input
          type="number"
          name="lifeMax"
          id="lifeMax"
          placeholder="hasta"
          value={dogData.lifeMax}
          onChange={handleChange}
          onPaste={handlePaste}
          onKeyDown={handleKeyPress}
        />
        <span style={{ color: "#ff9800" }}> {errors.life}</span>
        <br />
        <div className="image-gallery">
          {dogImages.map((imageURL, index) => (
            <StyledImage
              key={index}
              src={imageURL}
              alt={`Perro ${index + 1}`}
              className={selectedImage === imageURL ? "selected" : ""}
              onClick={() => handleImageClick(imageURL)}
            />
          ))}
        </div>
        <p style={{ color: "#ff9800" }}> {errors.image}</p>
        <FormComponent
          error={errors.selectedTemperaments}
          handleTemperamentToggle={handleTemperamentToggle}
          selectedTemperaments={dogData.selectedTemperaments}
        />
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Form;
