import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allDogs,
  breedSearch,
  breed_name_global,
  filterAndOrder,
  setCurrentPage,
} from "../../Redux/actions";
import { Button, InputBig } from "../../styles";

const Searchbar = () => {
  const dispatch = useDispatch();
  const breedNameGlobal = useSelector((state) => state.breedNameGlobal);

  //aplicar el filtro por raza o name
  const handleSubmit = async () => {
    if (breedNameGlobal) {
      await dispatch(breedSearch(breedNameGlobal));
      dispatch(filterAndOrder());
      dispatch(setCurrentPage(1));
    }
  };

  //mostrar todos los dogs, es decir quitamos el filtro por raza o name
  const handleClicShowAll = async () => {
    await dispatch(allDogs());
    dispatch(filterAndOrder());
    dispatch(breed_name_global(""));
  };

  const handleChange = (e) => {
    dispatch(breed_name_global(e.target.value));
  };

  return (
    <div>
      <InputBig
        type="text"
        name="breedSearch"
        id="breedSearch"
        onChange={handleChange}
        value={breedNameGlobal}
        placeholder="Busca una raza"
      />
      <Button type="button" onClick={handleSubmit}>
        Buscar
      </Button>
      <Button type="button" onClick={handleClicShowAll}>
        Todos
      </Button>
    </div>
  );
};

export default Searchbar;
