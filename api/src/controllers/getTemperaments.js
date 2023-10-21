const axios = require("axios");
const { Temperament } = require("../db");
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;

const getTemperaments = async (req, res) => {
  try {
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

    //!creo el array de objetos traidos de la API dogsTemperaments
    const dogsTemperaments = [];
    arraySet.forEach((e) => {
      dogsTemperaments.push({ name: e });
    });

    //verificar si los datos que voy a ingresar a la BD están duplicados
    //!aqui estarán los datos de la BD temperamentsDB
    const temperamentsDB = await Temperament.findAll();

    let tBD;

    if (temperamentsDB.length === 0) {
      //la base de datos no tiene registros
      await Temperament.bulkCreate(dogsTemperaments);
      tBD = await Temperament.findAll();
    } else {
      //la BD tiene registros, filtrar solo los que necesito
      const newArrTemp = dogsTemperaments.filter((dogTemp) => {
        return !temperamentsDB.some((dbTemp) => dogTemp.name === dbTemp.name);
      });

      await Temperament.bulkCreate(newArrTemp);
      tBD = await Temperament.findAll();
    }
    res.status(200).json(tBD);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error con temperaments: " + error.message });
  }
};

module.exports = getTemperaments;
