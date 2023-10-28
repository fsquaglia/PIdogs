const { LikeDog } = require("../db");

const delDogLike = async (req, res) => {
  const { id } = req.params;

  if (id) {
    try {
      await LikeDog.destroy({ where: { id: id } });
      res.status(200).json({ message: "Eliminado correctamente" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al eliminar el DogLike " + error.message });
    }
  } else {
    res.status(400).json({ message: "No se suministro el ID correctamente" });
  }
};

module.exports = delDogLike;
