import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterAndOrder,
  filterByOrigin,
  selectOrderValue,
  selectOriginValue,
  selectTemperValue,
} from "../../Redux/actions";
import { orderCards, filterByTemperam } from "../../Redux/actions";
import Cards from "../../Components/Cards/Cards";

const Home = () => {
  // const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const orderValue = useSelector((state) => state.orderValue);
  const filterApiBdValue = useSelector((state) => state.filterApiBdValue);
  const filterByTemperamValue = useSelector(
    (state) => state.filterByTemperamValue
  );

  const handleOrder = (e) => {
    // dispatch(orderCards(e.target.value));
    dispatch(selectOrderValue(e.target.value));
    dispatch(filterAndOrder());
    // aux ? setAux(false) : setAux(true);
  };

  const handleFilterApiBd = (e) => {
    // dispatch(filterByOrigin(e.target.value));
    dispatch(selectOriginValue(e.target.value));
    dispatch(filterAndOrder());
  };

  const handleFilterTemperam = (e) => {
    // dispatch(filterByTemperam(e.target.value));
    dispatch(selectTemperValue(e.target.value));
    dispatch(filterAndOrder());
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
      <select name="order" id="order" onChange={handleOrder} value={orderValue}>
        <option value="nameAZ">Raza AZ</option>
        <option value="nameZA">Raza ZA</option>
        <option value="weightAZ">Peso AZ</option>
        <option value="weightZA">Peso ZA</option>
      </select>
      <span> - </span>
      <span>Filtrar por: API/BD </span>
      <select
        name="filterApiBd"
        id="filterApiBd"
        onChange={handleFilterApiBd}
        value={filterApiBdValue}
      >
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
        value={filterByTemperamValue}
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
