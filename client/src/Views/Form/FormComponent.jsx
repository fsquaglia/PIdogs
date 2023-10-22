import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { ContainerDivSubForm, Input } from "../../styles";

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTemperamentList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  width: 300px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const FormComponent = ({
  error,
  handleTemperamentToggle,
  selectedTemperaments,
}) => {
  const tempGlobal = useSelector((state) => state.allTemperaments);
  const [searchTerm, setSearchTerm] = useState("");

  // Verifica si tempGlobal está definido y no es null
  const temperaments = [];
  if (tempGlobal) {
    tempGlobal.forEach((temp) => {
      temperaments.push(temp.name);
    });
  }

  const filteredTemperaments = temperaments.filter((temperament) =>
    temperament.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <StyledFormContainer>
        <div>
          <ContainerDivSubForm>
            <p>Selecciona temperamentos</p>
            <p>Temperamentos seleccionados</p>
          </ContainerDivSubForm>
          <div>
            <Input
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
      <p style={{ color: "#ff9800" }}> {error}</p>
    </>
  );
};

export default FormComponent;
