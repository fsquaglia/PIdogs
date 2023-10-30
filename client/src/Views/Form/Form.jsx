import React, { useEffect } from "react";
import { useState } from "react";
import validations from "../../utils/validations";
import FormComponent from "./FormComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  allDogs,
  dogbyName,
  filterAndOrder,
  message_global,
  postDogs,
} from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import {
  Input,
  InputBig,
  Button,
  StyledImage,
  ErrorMessage,
  StyledForm,
  VerticalDiv,
  VerticalConteinerDiv,
  StyledDiv,
  StyledH2,
  StyledLabel,
} from "../../styles";

require("dotenv").config();
const ENDIMGDOGS = process.env.REACT_APP_ENDIMGDOGS;

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tempGlobal = useSelector((state) => state.allTemperaments);
  const message = useSelector((state) => state.message);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
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
  const [errors, setErrors] = useState({ initial: "initial" });

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

  //manejo de los temperamentos en FormComponent
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

  // Verificar si hay errores para botón Submit
  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => !!error);
    setIsSubmitButtonDisabled(hasErrors);
  }, [errors]);

  //lógica de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // en tempGlobal [{},{},{}] tengo la tabla de temperamentos
    // en selectedTemperaments: ["", "", ""], tengo los que selecciona el usuario
    //de acuerdo a los temperam seleccionados, debo buscar sus id en la BD
    const idTemperSelected = [];
    if (tempGlobal) {
      idTemperSelected.push(
        ...tempGlobal
          .filter((temp) => dogData.selectedTemperaments.includes(temp.name))
          .map((temp) => temp.id)
      );
    }
    //las equivalencias de las alturas de cm a pulgadas
    const heightMinImperial = Math.floor(dogData.heightMin / 2.54);
    const heightMaxImperial = Math.floor(dogData.heightMax / 2.54);
    const heightString = `${dogData.heightMin} - ${dogData.heightMax} cm | ${heightMinImperial} - ${heightMaxImperial} in`;
    //las equivalencias del peso de kg a libras
    const weightMinImperial = Math.floor(dogData.weightMin * 2.205);
    const weightMaxImperial = Math.floor(dogData.weightMax * 2.205);
    const weightString = `${dogData.weightMin} - ${dogData.weightMax} kg | ${weightMinImperial} - ${weightMaxImperial} lbs`;
    const lifeString = `${dogData.lifeMin} - ${dogData.lifeMax} years`;
    const dogSend = {
      name: dogData.name,
      weight: weightString,
      height: heightString,
      life_span: lifeString,
      temperaments: idTemperSelected,
      image: dogData.image,
    };

    dispatch(postDogs(dogSend));
  };

  //limpiar controles del form si la carga de dogs fue exitosa
  useEffect(() => {
    if (message === "Raza creada exitosamente") {
      const dogDataname = dogData.name;
      dispatch(message_global(""));
      setDogData({
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
      setIsSubmitButtonDisabled(true);
      setSelectedImage("");

      const functionAsync = () => {
        return dispatch(allDogs()).then(() => dispatch(filterAndOrder()));
      };

      functionAsync()
        .then(() => {
          return dogbyName(dogDataname);
        })
        .then((data) => {
          navigate(`/details/${data[0].id}`);
        })
        .catch((error) => alert("Error al obtener el dog: " + error.message));
    }
  }, [message]);

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
    <VerticalConteinerDiv>
      <StyledH2>Crea tu raza de dog friend</StyledH2>
      <StyledForm onSubmit={handleSubmit}>
        {/*div nombre de raza*/}
        <VerticalDiv>
          <InputBig
            type="text"
            name="name"
            id="name"
            placeholder="Nombre de la raza"
            value={dogData.name}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.name}</ErrorMessage>
        </VerticalDiv>

        {/*div height weight life*/}

        <VerticalDiv>
          <StyledDiv>
            <StyledLabel htmlFor="height">Altura (cms):</StyledLabel>
            <Input
              type="number"
              name="heightMin"
              id="heightMin"
              placeholder="min"
              value={dogData.heightMin}
              onChange={handleChange}
              onPaste={handlePaste}
            />
            <Input
              type="number"
              name="heightMax"
              id="heightMax"
              placeholder="max"
              value={dogData.heightMax}
              onChange={handleChange}
              onPaste={handlePaste}
            />
            <ErrorMessage>{errors.height}</ErrorMessage>
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="weight">Peso (kgs): </StyledLabel>
            <Input
              type="number"
              name="weightMin"
              id="weightMin"
              placeholder="min"
              value={dogData.weightMin}
              onChange={handleChange}
              onPaste={handlePaste}
            />
            <Input
              type="number"
              name="weightMax"
              id="weightMax"
              placeholder="max"
              value={dogData.weightMax}
              onChange={handleChange}
              onPaste={handlePaste}
            />
            <ErrorMessage> {errors.weight}</ErrorMessage>
          </StyledDiv>
          <StyledDiv>
            <StyledLabel htmlFor="life">Años de vida: </StyledLabel>
            <Input
              type="number"
              name="lifeMin"
              id="lifeMin"
              placeholder="desde"
              value={dogData.lifeMin}
              onChange={handleChange}
              onPaste={handlePaste}
              onKeyDown={handleKeyPress}
            />
            <Input
              type="number"
              name="lifeMax"
              id="lifeMax"
              placeholder="hasta"
              value={dogData.lifeMax}
              onChange={handleChange}
              onPaste={handlePaste}
              onKeyDown={handleKeyPress}
            />
            <ErrorMessage> {errors.life}</ErrorMessage>
          </StyledDiv>
        </VerticalDiv>

        {/*div galería de imagenes*/}
        <VerticalDiv>
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
          <ErrorMessage> {errors.image}</ErrorMessage>
        </VerticalDiv>

        {/*div temperamentos en sub componente*/}
        <VerticalDiv>
          <FormComponent
            error={errors.selectedTemperaments}
            handleTemperamentToggle={handleTemperamentToggle}
            selectedTemperaments={dogData.selectedTemperaments}
          />
        </VerticalDiv>
        <VerticalConteinerDiv>
          <Button type="submit" disabled={isSubmitButtonDisabled}>
            Agregar
          </Button>
        </VerticalConteinerDiv>
      </StyledForm>
    </VerticalConteinerDiv>
  );
};

export default Form;
