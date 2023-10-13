const { Router } = require("express");
const express = require("express");
const temperamentsMiddleware = require("../middlewares/temperaments");
const dogsMiddleware = require("../middlewares/dogs");
const path = require("path");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.use("/temperaments", temperamentsMiddleware);
router.use("/dogs", dogsMiddleware);
const imagesDirectory = path.join(__dirname, "../assets"); // Ruta completa a la carpeta de imágenes
router.use("/images/", express.static(imagesDirectory));

module.exports = router;
