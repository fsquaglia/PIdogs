const { Temperament } = require("../db");
const { allTempAPI } = require("../handlers/getTempFromAPI");

const getTemperaments = async (req, res) => {
  try {
    const dogsTemperaments = await allTempAPI(); //Temperamentos de la API

    //verificar si los datos que voy a ingresar a la BD están duplicados
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
