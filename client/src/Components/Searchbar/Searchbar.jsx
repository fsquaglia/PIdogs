import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  allDogs,
  breedSearch,
  filterAndOrder,
  setCurrentPage,
} from "../../Redux/actions";
import { Button, InputBig } from "../../styles";

const Searchbar = () => {
  const dispatch = useDispatch();

  const [breedName, setBreedname] = useState("");

  //aplicar el filtro por raza o name
  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(breedSearch(breedName));
    dispatch(filterAndOrder());
    dispatch(setCurrentPage(1));
  };

  //mostrar todos los dogs, es decir quitamos el filtro por raza o name
  const handleClicShowAll = async () => {
    await dispatch(allDogs());
    dispatch(filterAndOrder());
    setBreedname("");
  };

  const handleChange = (e) => {
    setBreedname(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputBig
          type="text"
          name="breedSearch"
          id="breedSearch"
          onChange={handleChange}
          value={breedName}
          placeholder="Busca una raza"
        />
        <Button type="submit">Buscar</Button>
        <Button type="button" onClick={handleClicShowAll}>
          Todos
        </Button>
      </form>
    </div>
  );
};

export default Searchbar;
