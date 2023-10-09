const { Router } = require("express");
const router = Router();
const { Temperament } = require("../db");
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;

const axios = require("axios");

router.get("/", async (req, res) => {
  let arrTempWithoutSpace = [];
  try {
    const { data } = await axios.get(ENDPOINT + "?api_key=" + API_KEY);
    //extraigo todos los string con los temperamentos
    //devuelve un array con elementos, cada elemento
    //es un string de temperamentos delimitados por comas

    const arrTemperam = data.flatMap((element) =>
      element.temperament ? element.temperament.split(",") : []
    );

    //elimino los espacios al principio de cada string si los hay
    arrTemperam.forEach((element) => {
      arrTempWithoutSpace.push(element.trimStart().toLowerCase());
    });

    //elimino los elementos duplicados
    const arraySet = [...new Set(arrTempWithoutSpace)];
    const arrTemperaments = [];

    //coloco primera letra en mayúsculas
    arraySet.forEach((e) => {
      arrTemperaments.push(e.charAt(0).toUpperCase() + e.slice(1));
    });

    //!creo el array de objetos traidos de la API dogsTemperaments
    const dogsTemperaments = [];
    arrTemperaments.forEach((e) => {
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
      // res.status(200).json(tBD);
    } else {
      //la base de datos tiene registros, hay que comprobar duplicados
      const newArrTemp = [];
      for (let index = 0; index < dogsTemperaments.length; index++) {
        for (let index = 0; index < temperamentsDB.length; index++) {
          if (dogsTemperaments[index].name !== temperamentsDB[index].name) {
            newArrTemp.push(dogsTemperaments);
          }
        }
      }
      await Temperament.bulkCreate(newArrTemp);
      tBD = await Temperament.findAll();
      // res.status(200).json(tBD);
    }
    res.status(200).json(tBD);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
