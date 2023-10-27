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
import { Select, StyledBlackSpan, Button } from "../../styles";

const Home = () => {
  const dispatch = useDispatch();
  const orderValue = useSelector((state) => state.orderValue);
  const filterApiBdValue = useSelector((state) => state.filterApiBdValue);
  const filterByTemperamValue = useSelector(
    (state) => state.filterByTemperamValue
  );

  //handler de ordenamiento y filtros
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
    //si se filtra, vuelvo a page 1 para que el estado
    //no quede seteado en otra pág que puede no estar
    //disponible
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

  //!handler del button resetear
  const handleReset = () => {
    dispatch(selectOrderValue("nameAZ"));
    dispatch(selectOriginValue("all"));
    dispatch(selectTemperValue("all"));
    dispatch(filterAndOrder());
  };

  return (
    <div>
      <StyledBlackSpan>Ordenar por raza/peso: </StyledBlackSpan>
      <Select name="order" id="order" onChange={handleEvent} value={orderValue}>
        <option value="nameAZ">Raza AZ</option>
        <option value="nameZA">Raza ZA</option>
        <option value="weightAZ">Peso AZ</option>
        <option value="weightZA">Peso ZA</option>
      </Select>
      <StyledBlackSpan> - </StyledBlackSpan>
      <StyledBlackSpan>Filtrar por: API/BD </StyledBlackSpan>
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
      <StyledBlackSpan> - </StyledBlackSpan>
      <StyledBlackSpan>Temperamentos </StyledBlackSpan>
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
      <Button onClick={handleReset}>Resetear</Button>

      <Cards />
    </div>
  );
};

export default Home;
