//importo las action types
import {
  BREED_SEARCH,
  ALL_DOGS,
  DOGBYID,
  ALLTEMPERAMENTS,
  SET_CURRENT_PAGE,
  FILTERAPIBD_VALUE,
  FILTERBYTEMPER_VALUE,
  ORDER_VALUE,
  FILTERS,
  POSTDOG,
  DATALOADED,
  MESSAGEGLOBAL,
} from "./actions-types";

import axios from "axios";

require("dotenv").config();
const ENDDOGS = process.env.REACT_APP_ENDDOGS;
const ENDTEMPERAMENTS = process.env.REACT_APP_ENDTEMPERAMENTS;

//fn para establacer un mensaje global
export const message_global = (message) => {
  return {
    type: MESSAGEGLOBAL,
    payload: message,
  };
};

//fn datos iniciales cargados
export const data_loaded = (value) => {
  return {
    type: DATALOADED,
    payload: value,
  };
};

// fns para manejar value de select
export const selectOrderValue = (value) => {
  return {
    type: ORDER_VALUE,
    payload: value,
  };
};
export const selectOriginValue = (value) => {
  return {
    type: FILTERAPIBD_VALUE,
    payload: value,
  };
};
export const selectTemperValue = (value) => {
  return {
    type: FILTERBYTEMPER_VALUE,
    payload: value,
  };
};

//filtros y ordenamiento
export const filterAndOrder = () => {
  return {
    type: FILTERS,
    payload: "",
  };
};

//fn para el paginado
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

//fn busca perros por raza (breed)
export const breedSearch = (breed) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${ENDDOGS}?name=${breed}`);

      dispatch({
        type: BREED_SEARCH,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

//fn trae todos los perros
export const allDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(ENDDOGS);
      dispatch({
        type: ALL_DOGS,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

//fn trae un dog por id para el detail
export const dogById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(ENDDOGS + "/" + id);

      dispatch({
        type: DOGBYID,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const allTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(ENDTEMPERAMENTS);

      dispatch({
        type: ALLTEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

//fn alta de un perro
export const postDogs = (dog) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(ENDDOGS, dog);
      dispatch({
        type: POSTDOG,
        payload: data.message,
      });
      alert(data.message);
    } catch (error) {
      alert("Hubo un error: " + error.message);
    }
  };
};

//fn buscar en BD por name
export const dogbyName = async (name) => {
  try {
    const { data } = await axios(`${ENDDOGS}?name=${name}`);
    return data;
  } catch (error) {
    throw error.message;
  }
};
