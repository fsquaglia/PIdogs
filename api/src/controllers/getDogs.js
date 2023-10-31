const { allDogsAPI } = require("../handlers/getDogsFromAPI");
const { allDogsBD } = require("../handlers/getDogsFromBD");

const getDogs = async (req, res) => {
  //GET | /dogs (todas las razas de perros, o las solicitadas por query)
  const { name } = req.query;
  let allDogs = [];

  try {
    const dogsApi = await allDogsAPI(); //todos los dogs de la API
    const dogsBD = await allDogsBD(); //todos los dogs de la BD
    allDogs = [...dogsApi, ...dogsBD]; //junto los datos de API y BD

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
