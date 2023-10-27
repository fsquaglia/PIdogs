const { Router } = require("express");
const router = Router();
const getDogById = require("../controllers/getDogById");
const getDogs = require("../controllers/getDogs");
const postDog = require("../controllers/postDog");
const delDogById = require("../controllers/delDogById");

router.get("/", getDogs);
router.get("/:idRaza", getDogById);
router.post("/", postDog);
router.delete("/:idDelete", delDogById);
module.exports = router;
