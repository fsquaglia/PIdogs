const { Dog, Temperament } = require("../db");

const delDogById = async (req, res) => {
  const { idDelete } = req.params;

  if (idDelete) {
    try {
      const dog = await Dog.findOne({ where: { id: idDelete } });

      if (!dog) {
        return res.status(404).json({
          message: "No se encontró el perro con el ID proporcionado",
        });
      }

      // Elimina las relaciones de temperamento asociadas al perro
      await dog.setTemperaments([]);

      // Elimina el perro
      await dog.destroy();
      res.status(200).json({ message: "Perro eliminado exitosamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar " + error.message });
    }
  } else {
    res.status(400).json({ message: "Error al elimiar el dog por id" });
  }
};

module.exports = delDogById;
