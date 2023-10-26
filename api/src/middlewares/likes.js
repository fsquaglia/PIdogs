const { Router } = require("express");
const router = Router();
const getLikes = require("../controllers/getLikes");

router.get("/", getLikes);

module.exports = router;
