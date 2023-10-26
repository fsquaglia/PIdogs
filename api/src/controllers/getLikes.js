const { LikeSite } = require("../db");

const getLikes = async (req, res) => {
  //get para obtener la cantidad de Likes almacenados

  try {
    const likeSiteRecord = await LikeSite.findOne(); //encontrar un registro

    if (likeSiteRecord === null) {
      // si no hay registro creo el primero
      await LikeSite.create({ likes: 0 });
    }

    const likeRecord = await LikeSite.findOne();
    const incrementLike = await likeRecord.increment("likes");

    res.status(200).json({ message: incrementLike.likes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los likes: " + error.message });
  }
};

module.exports = getLikes;
