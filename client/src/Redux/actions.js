//importo las action types
import {
  BREED_SEARCH,
  ALL_DOGS,
  DOGBYID,
  ALLTEMPERAMENTS,
  SET_CURRENT_PAGE,
  ORDER,
  FILTER_BY_ORIGIN,
  FILTER_BY_TEMPERAMENT,
  FILTERAPIBD_VALUE,
  FILTERBYTEMPER_VALUE,
  ORDER_VALUE,
  FILTERS,
} from "./actions-types";

import axios from "axios";

require("dotenv").config();
const ENDDOGS = process.env.REACT_APP_ENDDOGS;
const ENDTEMPERAMENTS = process.env.REACT_APP_ENDTEMPERAMENTS;

//fns para manejar value de select
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

//fn filtrar por origen API o BD
export const filterByOrigin = (origin) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
};

//fn filtrar por temperamentos
export const filterByTemperam = (temp) => {
  return {
    type: FILTER_BY_TEMPERAMENT,
    payload: temp,
  };
};

//fn ordenamiento
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
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