import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTemperaments } from "../../Redux/actions";
import { useEffect } from "react";

const FormComponent = () => {
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const temperaments = useSelector((state) => state.allTemperaments);

  useEffect(() => {
    // Realiza la acción de carga de perros si aún no se han cargado
    if (temperaments.length === 0) {
      dispatch(allTemperaments());
    }
  }, [dispatch, temperaments]);
  //   const handleTemperamentToggle = (temperament) => {
  //     if (selectedTemperaments.includes(temperament)) {
  //       setSelectedTemperaments(
  //         selectedTemperaments.filter((temp) => temp !== temperament)
  //       );
  //     } else {
  //       setSelectedTemperaments([...selectedTemperaments, temperament]);
  //     }
  //   };

  //   const filteredTemperaments = temperaments.filter((temperament) =>
  //     temperament.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  return (
    <>
      <div>
        {/* <input
          type="text"
          placeholder="Buscar temperamento"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="temperament-list">
          {filteredTemperaments.map((temperament) => (
            <div
              key={temperament}
              onClick={() => handleTemperamentToggle(temperament)}
            >
              {temperament}
            </div>
          ))}
        </div>
      </div>
      <div className="selected-temperaments">
        {selectedTemperaments.map((temperament) => (
          <div key={temperament}>{temperament}</div>
        ))} */}
      </div>
    </>
  );
};

export default FormComponent;
