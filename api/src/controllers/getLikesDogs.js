const { LikeDog } = require("../db");

const getLikesDogs = async (req, res) => {
  try {
    const likeDogs = await LikeDog.findAll();

    res.status(200).json(likeDogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los likes: " + error.message });
  }
};

module.exports = getLikesDogs;
