const { Router } = require("express");
const router = Router();
const getLikesDogs = require("../controllers/getLikesDogs");
const putLikeDog = require("../controllers/putLikeDog");
const delDogLike = require("../controllers/delDogLike");

router.get("/", getLikesDogs);
router.put("/:id", putLikeDog);
router.delete("/:id", delDogLike);

module.exports = router;
