import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedSearch } from "../../Redux/actions";

const Searchbar = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.breedDogs); // Guardar los resultados de la búsqueda
  const [breedName, setBreedname] = useState("");
  const [noResults, setNoResults] = useState(false); // Estado para controlar si no hay coincidencias

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(breedSearch(breedName));
  };

  const handleClicShowAll = () => {
    dispatch(breedSearch(""));
    setNoResults(false); // Reiniciar el estado de noResults
  };

  const handleChange = (e) => {
    setBreedname(e.target.value);
  };

  useEffect(() => {
    if (searchResults.length === 0) {
      setNoResults(true); // Actualizar el estado si no hay coincidencias
    } else {
      setNoResults(false); // Reiniciar el estado si hay coincidencias
    }
  }, [searchResults]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="breedSearch"
          id="breedSearch"
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
        <button type="button" onClick={handleClicShowAll}>
          Todos
        </button>
      </form>
      {noResults && <p>No se encontraron coincidencias</p>}{" "}
      {/* Mostrar mensaje de alerta */}
    </div>
  );
};

export default Searchbar;
