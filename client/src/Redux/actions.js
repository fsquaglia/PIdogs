//importo las action types
import { BREED_SEARCH, ALL_DOGS, DOGBYID } from "./actions-types";

import axios from "axios";

require("dotenv").config();
const ENDDOGS = process.env.REACT_APP_ENDDOGS;
const ENDTEMPERAMENTS = process.env.REACT_APP_ENDTEMPERAMENTS;

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
