const { Dog, Temperament } = require("../db");

const postDog = async (req, res) => {
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
      res
        .status(500)
        .json({ message: "Error al guardar un dog: " + error.message });
    }
  } else {
    //los datos no llegaron
    res.status(400).json({ message: "Faltan datos" });
  }
};

module.exports = postDog;
