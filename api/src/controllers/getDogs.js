const axios = require("axios");
const { Dog, Temperament } = require("../db");
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;

const getDogs = async (req, res) => {
  //GET | /dogs (todas las razas de perros, o las solicitadas por query)
  const { name } = req.query;
  let allDogs = [];

  try {
    //*busco todos los dogs de la API
    const { data } = await axios.get(ENDPOINT + "?api_key=" + API_KEY);

    const dogsApi = data.map((obj) => ({
      name: obj.name,
      id: obj.id,
      reference_image_id: obj.reference_image_id,
      height: `${obj.height.metric} cm | ${obj.height.imperial} in`,
      weight: `${obj.weight.metric} kg | ${obj.weight.imperial} lbs`,
      life_span: obj.life_span,
      temperament: obj.temperament,
      origin: "API",
    }));

    //*busco todos los dogs de la BD
    const dogs = await Dog.findAll({
      where: {},
      include: [
        {
          model: Temperament,
          through: { attributes: [] },
          attributes: ["name"],
        },
      ],
    });
    // Arreglo para almacenar los resultados formateados
    const dogsBD = [];

    dogs.forEach((dog) => {
      const temperaments = dog.Temperaments.map((temp) => temp.name).join(", ");
      const formattedDog = {
        id: dog.id,
        name: dog.name,
        reference_image_id: dog.reference_image_id,
        height: dog.height,
        weight: dog.weight,
        life_span: dog.life_span,
        temperament: temperaments,
        origin: "BD",
      };
      dogsBD.push(formattedDog);
    });
    //*junto los datos de API y BD
    allDogs = [...dogsApi, ...dogsBD];

    //! compruebo si llegó algo por query
    if (name) {
      //GET | /dogs/?name="..."
      // si name -- > llego algo por query

      const dogsFilter = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );

      if (dogsFilter) {
        //hay datos en el filtro, entonces los envio
        return res.status(200).json(dogsFilter);
      } else {
        //no devuelve datos el filtro
        return res.status(200).json([]);
      }
    } else {
      //*no llego nada por query, muestro todos los dogs
      res.status(200).json(allDogs);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getDogs;
