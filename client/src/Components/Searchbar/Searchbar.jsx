import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breedSearch } from "../../Redux/actions";

const Searchbar = () => {
  const dispatch = useDispatch();

  const [breedName, setBreedname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(breedSearch(breedName));
  };

  const handleClicShowAll = () => {
    dispatch(breedSearch(""));
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
