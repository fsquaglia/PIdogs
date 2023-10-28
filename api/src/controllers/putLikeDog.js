const { LikeDog } = require("../db");

const putLikeDog = async (req, res) => {
  //put para aumentar un like
  const { id } = req.params;

  try {
    const likeDogRecord = await LikeDog.findOne({ where: { id: id } }); //encontrar un registro

    if (likeDogRecord === null) {
      // si no hay registro creo el primero
      await LikeDog.create({ id: id, likes: 0 });
    }

    const dogRecord = await LikeDog.findOne({ where: { id: id } });
    await dogRecord.increment("likes");

    res.status(200).json({ message: "Like incrementado" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al incrementar los likes: " + error.message });
  }
};

module.exports = putLikeDog;
