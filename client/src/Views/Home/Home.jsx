import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterAndOrder,
  selectOrderValue,
  selectOriginValue,
  selectTemperValue,
  setCurrentPage,
} from "../../Redux/actions";
import Cards from "../../Components/Cards/Cards";
import { Select } from "../../styles";

const Home = () => {
  const dispatch = useDispatch();
  const orderValue = useSelector((state) => state.orderValue);
  const filterApiBdValue = useSelector((state) => state.filterApiBdValue);
  const filterByTemperamValue = useSelector(
    (state) => state.filterByTemperamValue
  );

  const handleEvent = (e) => {
    const nameValue = e.target.name;
    if (nameValue === "order") {
      dispatch(selectOrderValue(e.target.value));
    } else if (nameValue === "filterApiBd") {
      dispatch(selectOriginValue(e.target.value));
    } else if (nameValue === "filterByTemperam") {
      dispatch(selectTemperValue(e.target.value));
    }
    dispatch(filterAndOrder());

    if (nameValue !== "order") {
      dispatch(setCurrentPage(1));
    }
  };

  //traer los temperamentos para mostrar en la lista de filtrado
  //extraer su propiedad name y ordenar alfabeticamente
  const tempGlobal = useSelector((state) => state.allTemperaments);
  const temperaments = [];
  if (tempGlobal) {
    tempGlobal.sort((a, b) => a.name.localeCompare(b.name));
    tempGlobal.forEach((temp) => {
      temperaments.push(temp.name);
    });
  }

  return (
    <div>
      <span>Ordenar por raza/peso: </span>
      <Select name="order" id="order" onChange={handleEvent} value={orderValue}>
        <option value="nameAZ">Raza AZ</option>
        <option value="nameZA">Raza ZA</option>
        <option value="weightAZ">Peso AZ</option>
        <option value="weightZA">Peso ZA</option>
      </Select>
      <span> - </span>
      <span>Filtrar por: API/BD </span>
      <Select
        name="filterApiBd"
        id="filterApiBd"
        onChange={handleEvent}
        value={filterApiBdValue}
      >
        <option value="all">Todos</option>
        <option value="API">API</option>
        <option value="BD">BD</option>
      </Select>
      <span> - </span>
      <span>Temperamentos </span>
      <Select
        name="filterByTemperam"
        id="filterByTemperam"
        onChange={handleEvent}
        value={filterByTemperamValue}
      >
        <option value="all">Todos</option>
        {temperaments.map((temperament, index) => (
          <option key={index} value={temperament}>
            {temperament}
          </option>
        ))}
      </Select>

      <Cards />
    </div>
  );
};

export default Home;
