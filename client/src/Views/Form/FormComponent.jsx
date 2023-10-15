import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTemperamentList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  width: 300px;
`;

const FormComponent = ({
  error,
  handleTemperamentToggle,
  selectedTemperaments,
}) => {
  const tempGlobal = useSelector((state) => state.allTemperaments);

  //   const [selectedTemperaments, setSelectedTemperaments] = useState([]);
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

  //   const handleTemperamentToggle = (temperament) => {
  //     if (selectedTemperaments.includes(temperament)) {
  //       setSelectedTemperaments(
  //         selectedTemperaments.filter((temp) => temp !== temperament)
  //       );
  //     } else {
  //       setSelectedTemperaments([...selectedTemperaments, temperament]);
  //     }
  //   };

  return (
    <>
      <StyledFormContainer>
        <div>
          <input
            type="text"
            placeholder="Buscar temperamento"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
        </div>
        <div className="selected-temperaments">
          {selectedTemperaments.map((temperament) => (
            <div key={temperament}>{temperament}</div>
          ))}
        </div>
      </StyledFormContainer>
      <p style={{ color: "#ff9800" }}> {error}</p>
    </>
  );
};

export default FormComponent;
