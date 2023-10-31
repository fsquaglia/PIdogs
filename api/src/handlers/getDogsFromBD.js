const { Dog, Temperament } = require("../db");

//!devuelve todos los dogs de la BD
const allDogsBD = async () => {
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
  return dogsBD;
};

//!devuelve un dog de la BD de acuerdo al id
const dogBDbyId = async (idRaza) => {
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

  // concatenar temperamentos en un string
  let temperaments = dogByIdBd.Temperaments.map((temp) => temp.name).join(", ");

  // Crea un nuevo objeto con los datos del perro y los nombres de los temperamentos concatenados
  result = {
    id: dogByIdBd.id,
    reference_image_id: dogByIdBd.reference_image_id,
    name: dogByIdBd.name,
    height: dogByIdBd.height,
    weight: dogByIdBd.weight,
    life_span: dogByIdBd.life_span,
    temperament: temperaments,
    origin: "BD",
  };
  return result;
};

module.exports = { allDogsBD, dogBDbyId };
