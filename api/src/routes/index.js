const { Router } = require("express");
const express = require("express");
const temperamentsMiddleware = require("../middlewares/temperaments");
const dogsMiddleware = require("../middlewares/dogs");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.use("/temperaments", temperamentsMiddleware);
router.use("/dogs", dogsMiddleware);

module.exports = router;
