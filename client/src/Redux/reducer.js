//importar las actions types
import {
  BREED_SEARCH,
  ALL_DOGS,
  DOGBYID,
  ALLTEMPERAMENTS,
  SET_CURRENT_PAGE,
} from "./actions-types";

//definir el initialState
let initialState = {
  // allDogs: [],
  allTemperaments: [],
  breedDogs: [],
  dogDetail: {},
  selectedTemperaments: [],
  currentPage: 1,
  itemsPerPage: 8,
};

//definir la función rootReducer

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      //definir first index
      //casos de corte
      //guardar en el estado
      return {
        ...state,
        currentPage: action.payload,
      };

    case BREED_SEARCH: //caso de buscar por raza
      return {
        ...state,
        breedDogs: action.payload,
      };
    case ALL_DOGS: //recuperar todos los perros
      return {
        ...state,
        breedDogs: action.payload,
      };
    case DOGBYID: //recuperar un perro por id
      return {
        ...state,
        dogDetail: action.payload,
      };
    case ALLTEMPERAMENTS: //recuperar todos los temperamentos
      return {
        ...state,
        allTemperaments: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
