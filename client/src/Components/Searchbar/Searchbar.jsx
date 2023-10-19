import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  allDogs,
  breedSearch,
  filterAndOrder,
  setCurrentPage,
} from "../../Redux/actions";

const Searchbar = () => {
  const dispatch = useDispatch();

  const [breedName, setBreedname] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(breedSearch(breedName));
    dispatch(filterAndOrder());
    dispatch(setCurrentPage(1));
  };

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
        <input
          type="text"
          name="breedSearch"
          id="breedSearch"
          onChange={handleChange}
          value={breedName}
        />
        <button type="submit">Buscar</button>
        <button type="button" onClick={handleClicShowAll}>
          Todos
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
