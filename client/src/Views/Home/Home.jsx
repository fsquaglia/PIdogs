import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allDogs, filterByOrigin } from "../../Redux/actions";
import { orderCards, filterByTemperam } from "../../Redux/actions";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    aux ? setAux(false) : setAux(true);
  };

  const handleFilterApiBd = (e) => {
    dispatch(filterByOrigin(e.target.value));
  };

  const handleFilterTemperam = (e) => {
    dispatch(filterByTemperam(e.target.value));
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
      <h2>Encuentra tu dog friend!</h2>
      <span>Ordenar por raza/peso: </span>
      <select name="order" id="order" onChange={handleOrder}>
        <option value="nameAZ">Raza AZ</option>
        <option value="nameZA">Raza ZA</option>
        <option value="weightAZ">Peso AZ</option>
        <option value="weightZA">Peso ZA</option>
      </select>
      <span> - </span>
      <span>Filtrar por: API/BD </span>
      <select name="filterApiBd" id="filterApiBd" onChange={handleFilterApiBd}>
        <option value="all">Todos</option>
        <option value="API">API</option>
        <option value="BD">BD</option>
      </select>
      <span> - </span>
      <span>Temperamentos </span>
      <select
        name="filterByTemperam"
        id="filterByTemperam"
        onChange={handleFilterTemperam}
      >
        <option value="all">Todos</option>
        {temperaments.map((temperament, index) => (
          <option key={index} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>

      <br />
      <br />
      <Cards />
    </div>
  );
};

export default Home;
