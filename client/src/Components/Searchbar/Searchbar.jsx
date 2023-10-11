import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedSearch } from "../../Redux/actions";

const Searchbar = () => {
  //almaceno la ejecución de dispatch
  const dispatch = useDispatch();
  const prueba = useSelector((state) => state.breedDogs);
  //guardo la raza que voy a buscar
  const [breedName, setBreedname] = useState("");

  useEffect(() => {
    if (prueba.length > 0) {
      console.log(prueba);
    }
  }, [prueba]);
  //manejo del botón submit del formulario para buscar razas de perros
  const handleSubmit = (event) => {
    event.preventDefault();
    //debe hacer un dispatch buscando por breedName
    dispatch(breedSearch(breedName));
  };

  //control de los cambios del input
  const handleChange = (e) => {
    setBreedname(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="breedSearch"
          id="breedSearch"
          onChange={handleChange}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default Searchbar;
