const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");
require("dotenv").config();
const { ENDPOINT, API_KEY } = process.env;
const { Sequelize, Op } = require("sequelize");

const axios = require("axios");

router.get("/", async (req, res) => {
  //GET | /dogs (todas las razas de perros, o las solicitadas por query)
  const { name } = req.query;
  let allDogs = [];

  try {
    //! aca va todo
    //*busco todos los dogs de la API
    const { data } = await axios.get(ENDPOINT + "?api_key=" + API_KEY);

    const dogsApi = data.map((obj) => ({
      name: obj.name,
      id: obj.id,
      reference_image_id: obj.reference_image_id,
      height: obj.height.metric,
      weight: obj.weight.metric,
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
});

router.get("/:idRaza", async (req, res) => {
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
            attributes: ["name"], // Agrega 'name' u otras columnas que desees mostrar
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
        temperament: temperaments, // Asigna el string de temperamentos
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
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  //POST | /dogs
  //temperaments debe llegar como un array de id
  const { name, height, weight, life_span, temperaments, image } = req.body;

  //verificar la llegada de datos
  if (name && height && weight && life_span) {
    //los datos llegan correctamente

    try {
      let dog = await Dog.findOne({ where: { name: name } });

      if (!dog) {
        // Si el perro no existe, créalo
        dog = await Dog.create({
          name: name,
          height: height,
          weight: weight,
          life_span: life_span,
          reference_image_id: image,
        });
      } else {
        // Si el perro ya existe, responde con un error
        return res.status(200).json({ message: "Raza duplicada" });
      }

      if (temperaments) {
        for (let index = 0; index < temperaments.length; index++) {
          const temp = await Temperament.findByPk(temperaments[index]);

          await dog.addTemperament(temp);
        }
      }

      res.status(200).json({ message: "Raza creada exitosamente" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    //los datos no llegaron
    res.status(400).json({ message: "Faltan datos" });
  }
});

module.exports = router;
