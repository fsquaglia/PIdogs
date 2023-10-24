import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  ContainerDivSubForm,
  ErrorMessage,
  StyledFormContainer,
  StyledTemperamentList,
  StyledBlackSpan,
  InputBig,
} from "../../styles";

const FormComponent = ({
  error,
  handleTemperamentToggle,
  selectedTemperaments,
}) => {
  const tempGlobal = useSelector((state) => state.allTemperaments);
  const [searchTerm, setSearchTerm] = useState("");

  // Verifica si tempGlobal está definido y no es null
  // extrae name de los temperaments
  const temperaments = [];
  if (tempGlobal) {
    tempGlobal.forEach((temp) => {
      temperaments.push(temp.name);
    });
  }

  //devuelve la lista de temperamentos filtrados según contenido del input de filtros. Mientras no haya texto devuelve todos los temperamentos
  const filteredTemperaments = temperaments.filter((temperament) =>
    temperament.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <StyledFormContainer>
        <div>
          <ContainerDivSubForm>
            <StyledBlackSpan>Selecciona temperamentos</StyledBlackSpan>
            <StyledBlackSpan>Temperamentos seleccionados</StyledBlackSpan>
          </ContainerDivSubForm>
          <div>
            <InputBig
              type="text"
              placeholder="Buscar temperamento"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "200px", textAlign: "center" }}
            />
          </div>

          <ContainerDivSubForm>
            <StyledTemperamentList>
              {filteredTemperaments.map((temperament) => (
                <div
                  key={temperament}
                  onClick={() => handleTemperamentToggle(temperament)}
                >
                  {temperament}
                </div>
              ))}
            </StyledTemperamentList>

            <div className="selected-temperaments">
              <StyledTemperamentList>
                {selectedTemperaments.map((temperament) => (
                  <div key={temperament}>{temperament}</div>
                ))}
              </StyledTemperamentList>
            </div>
          </ContainerDivSubForm>
        </div>
      </StyledFormContainer>
      <ErrorMessage> {error}</ErrorMessage>
    </>
  );
};

export default FormComponent;
