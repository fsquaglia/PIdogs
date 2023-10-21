const axios = require("axios");
const { Dog, Temperament } = require("../db");
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;

const getDogById = async (req, res) => {
  //GET /dogs/:idRaza

  const { idRaza } = req.params;
  let result;

  try {
    if (isNaN(Number(idRaza))) {
      //idRaza no es un numero, es un UUID entocnes buscamos en la BD
      const dogByIdBd = await Dog.findOne({
        where: { id: idRaza },
        include: [
          {
            model: Temperament,
            through: { attributes: [] },
            attributes: ["name"],
          },
        ],
      });

      // Obtén los nombres de los temperamentos y concaténalos en un string
      let temperaments = dogByIdBd.Temperaments.map((temp) => temp.name).join(
        ", "
      );

      // Crea un nuevo objeto con los datos del perro y los nombres de los temperamentos concatenados
      result = {
        id: dogByIdBd.id,
        reference_image_id: dogByIdBd.reference_image_id,
        name: dogByIdBd.name,
        height: dogByIdBd.height,
        weight: dogByIdBd.weight,
        life_span: dogByIdBd.life_span,
        temperament: temperaments,
      };
    } else {
      //es un numero, buscamos en la API
      const { data } = await axios.get(
        ENDPOINT + "/" + idRaza + "?api_key=" + API_KEY
      );

      if (data) {
        result = {
          name: data.name,
          id: data.id,
          reference_image_id: data.reference_image_id,
          height: data.height.metric,
          weight: data.weight.metric,
          life_span: data.life_span,
          temperament: data.temperament,
        };
      }
    }

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error en Dog by Id: " + error.message });
  }
};

module.exports = getDogById;
