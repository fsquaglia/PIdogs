const { dogBDbyId } = require("../handlers/getDogsFromBD");
const { dogAPIbyId } = require("../handlers/getDogsFromAPI");

const getDogById = async (req, res) => {
  //GET /dogs/:idRaza

  const { idRaza } = req.params;
  let result;

  try {
    if (isNaN(Number(idRaza))) {
      result = await dogBDbyId(idRaza); //idRaza no es un numero, es un UUID entocnes buscamos en la BD
    } else {
      result = await dogAPIbyId(idRaza); //es un numero, buscamos en la API
    }

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error en Dog by Id: " + error.message });
  }
};

module.exports = getDogById;
