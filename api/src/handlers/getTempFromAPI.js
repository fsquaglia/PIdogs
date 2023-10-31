const axios = require("axios");
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;

const allTempAPI = async () => {
  const { data } = await axios.get(ENDPOINT + "?api_key=" + API_KEY);
  //extraigo todos los string con los temperamentos
  //devuelve un array con elementos, cada elemento
  //es un string de temperamentos delimitados por comas
  let newArray = [];
  data.forEach((dogData) => {
    if (dogData.temperament) newArray.push(dogData.temperament);
  });

  const arrTemperam = newArray.flatMap((element) => element.split(","));

  //elimino los espacios al principio de cada string si los hay
  let arrTempWithoutSpace = [];
  arrTemperam.forEach((element) => {
    arrTempWithoutSpace.push(element?.trimStart());
  });

  //elimino los elementos duplicados
  let arraySet = [];

  for (let i = 0; i < arrTempWithoutSpace.length; i++) {
    if (arraySet.indexOf(arrTempWithoutSpace[i]) === -1) {
      arraySet.push(arrTempWithoutSpace[i]);
    }
  }

  //creo el array de objetos traidos de la API
  const dogsTemperaments = [];
  arraySet.forEach((e) => {
    dogsTemperaments.push({ name: e });
  });

  return dogsTemperaments;
};

module.exports = { allTempAPI };
