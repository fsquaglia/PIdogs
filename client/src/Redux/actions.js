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
  LIKES_COUNT_SUCCESS,
  DELETECARD,
  DELETEDOGBD,
  LIKESDOGS,
} from "./actions-types";

import axios from "axios";

require("dotenv").config();
const ENDDOGS = process.env.REACT_APP_ENDDOGS;
const ENDTEMPERAMENTS = process.env.REACT_APP_ENDTEMPERAMENTS;
const ENDLIKES = process.env.REACT_APP_ENDLIKES;
const ENDLIKESDOGS = process.env.REACT_APP_ENDLIKESDOGS;

//eliminar un Dog de la BD
export const deleteDogById = (idDeleteDog) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:3001/dogs/" + idDeleteDog, null);
      dispatch({
        type: MESSAGEGLOBAL,
        payload: "Se eliminó el dog definitivamente",
      });
    } catch (error) {
      alert("Hubo un error al eliminar: " + error.message);
    }
  };
};

//fn eliminar una card logica
export const delete_card = (id) => {
  return {
    type: DELETECARD,
    payload: id,
  };
};

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
      alert("Error al obtener dobs por raza: " + error.message);
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
      alert("Error al obtener todos los dogs: " + error.message);
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
      alert("Error al obtener el dog por id: " + error.message);
    }
  };
};

//fn para obtener todos los temperamentos de la API
export const allTemperaments = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(ENDTEMPERAMENTS);

      dispatch({
        type: ALLTEMPERAMENTS,
        payload: data,
      });
    } catch (error) {
      alert("Error al obtener los temperaments: " + error.message);
    }
  };
};

//fn alta de un dog por Formulario
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
      alert("Hubo un error al dar de alta: " + error.message);
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

//fn obtener cantidad de likes
export const likesConut = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/likes");

      dispatch({ type: LIKES_COUNT_SUCCESS, payload: data.message });
    } catch (error) {
      alert("Hubo un error al obtener los likes: " + error.message);
    }
  };
};

//fn obtener la tabla de Likes por Dogs
export const likes_Dogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(ENDLIKESDOGS);
      dispatch({
        type: LIKESDOGS,
        payload: data,
      });
    } catch (error) {
      alert("Error al obtener los likes por dogs " + error.message);
    }
  };
};

//fn incrementar un like a un dog
export const putIncrementLikeDog = (id) => {
  return async (dispatch) => {
    try {
      await axios.put(ENDLIKESDOGS + "/" + id);
      dispatch({
        type: MESSAGEGLOBAL,
        payload: "Like agregado",
      });
    } catch (error) {
      alert("No se pudo agregar el like " + error.message);
    }
  };
};

//fn eliminar dog de Modelo LikesDogs
export const delDog_Like = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete("http://localhost:3001/likesdogs/" + id);
      dispatch({
        type: MESSAGEGLOBAL,
        payload: "Dog Likes eliminados",
      });
    } catch (error) {
      alert("No se pudo eliminar el dog like " + error.message);
    }
  };
};
