//importar las actions types
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

//definir el initialState
let initialState = {
  // allDogs: [],
  allTemperaments: [],
  breedDogs: [],
  allDogsBackup: [],
  dogDetail: {},
  selectedTemperaments: [],
  currentPage: 1,
  itemsPerPage: 8,
  orderValue: "nameAZ",
  filterApiBdValue: "all",
  filterByTemperamValue: "all",
};

//definir la función rootReducer

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_VALUE:
      return {
        ...state,
        orderValue: action.payload,
      };
    case FILTERAPIBD_VALUE:
      return {
        ...state,
        filterApiBdValue: action.payload,
      };

    case FILTERBYTEMPER_VALUE:
      return {
        ...state,
        filterByTemperamValue: action.payload,
      };

    case FILTERS:
      //filtrar por temperamentos
      let dogsFilteredTemp;
      if (state.filterByTemperamValue === "all") {
        dogsFilteredTemp = state.allDogsBackup;
      } else {
        dogsFilteredTemp = state.allDogsBackup.filter(
          (dog) =>
            dog.temperament &&
            dog.temperament.includes(state.filterByTemperamValue)
        );
      }
      // filtrar por origin
      let dogsFiltered;
      switch (state.filterApiBdValue) {
        case "API":
          dogsFiltered = dogsFilteredTemp.filter((dog) => dog.origin === "API");
          break;
        case "BD":
          dogsFiltered = dogsFilteredTemp.filter((dog) => dog.origin === "BD");
          break;
        case "all":
          dogsFiltered = dogsFilteredTemp;
          break;
        default:
          return state;
      }
      //ordenar
      let dogsOrder;
      switch (state.orderValue) {
        case "nameAZ":
          dogsOrder = dogsFiltered.slice().sort((a, b) => {
            return a.name.localeCompare(b.name); // Usar localeCompare para ordenar alfabéticamente
          });
          break;

        case "nameZA":
          dogsOrder = dogsFiltered.slice().sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;
        case "weightAZ":
          dogsOrder = dogsFiltered.slice().sort((a, b) => {
            // Extraer el primer número del rango de peso y convertirlo a un número
            const weightA = parseInt(a.weight.split(" - ")[0], 10);
            const weightB = parseInt(b.weight.split(" - ")[0], 10);
            return weightA - weightB;
          });
          break;
        case "weightZA":
          dogsOrder = dogsFiltered.slice().sort((a, b) => {
            // Extraer el primer número del rango de peso y convertirlo a un número
            const weightA = parseInt(a.weight.split(" - ")[0], 10);
            const weightB = parseInt(b.weight.split(" - ")[0], 10);
            return weightB - weightA;
          });
          break;

        default:
          return state;
      }

      return {
        ...state,
        breedDogs: dogsOrder,
      };

    case FILTER_BY_TEMPERAMENT:
    // let dogsFilteredTemp;

    // if (action.payload === "all") {
    //   dogsFilteredTemp = state.allDogsBackup;
    // } else {
    //   dogsFilteredTemp = state.allDogsBackup.filter(
    //     (dog) => dog.temperament && dog.temperament.includes(action.payload)
    //   );
    // }
    // return {
    //   ...state,
    //   breedDogs: dogsFilteredTemp,
    // };

    case FILTER_BY_ORIGIN:
    // let dogsFiltered;
    // switch (action.payload) {
    //   case "API":
    //     dogsFiltered = state.allDogsBackup.filter(
    //       (dog) => dog.origin === "API"
    //     );
    //     break;
    //   case "BD":
    //     dogsFiltered = state.allDogsBackup.filter(
    //       (dog) => dog.origin === "BD"
    //     );
    //     break;
    //   case "all":
    //     dogsFiltered = state.allDogsBackup;
    //     break;
    //   default:
    //     return state;
    // }
    // return {
    //   ...state,
    //   breedDogs: dogsFiltered,
    // };
    case ORDER:
    // let dogsOrder;
    // switch (action.payload) {
    //   case "nameAZ":
    //     dogsOrder = state.breedDogs.slice().sort((a, b) => {
    //       return a.name.localeCompare(b.name); // Usar localeCompare para ordenar alfabéticamente
    //     });
    //     break;

    //   case "nameZA":
    //     dogsOrder = state.breedDogs.slice().sort((a, b) => {
    //       return b.name.localeCompare(a.name);
    //     });
    //     break;
    //   case "weightAZ":
    //     dogsOrder = state.breedDogs.slice().sort((a, b) => {
    //       // Extraer el primer número del rango de peso y convertirlo a un número
    //       const weightA = parseInt(a.weight.split(" - ")[0], 10);
    //       const weightB = parseInt(b.weight.split(" - ")[0], 10);
    //       return weightA - weightB;
    //     });
    //     break;
    //   case "weightZA":
    //     dogsOrder = state.breedDogs.slice().sort((a, b) => {
    //       // Extraer el primer número del rango de peso y convertirlo a un número
    //       const weightA = parseInt(a.weight.split(" - ")[0], 10);
    //       const weightB = parseInt(b.weight.split(" - ")[0], 10);
    //       return weightB - weightA;
    //     });
    //     break;

    //   default:
    //     return state;
    // }

    // return {
    //   ...state,
    //   breedDogs: dogsOrder,
    // };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case BREED_SEARCH: //caso de buscar por raza
      return {
        ...state,
        breedDogs: action.payload,
        allDogsBackup: action.payload,
      };
    case ALL_DOGS: //recuperar todos los perros
      return {
        ...state,
        breedDogs: action.payload,
        allDogsBackup: action.payload,
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
