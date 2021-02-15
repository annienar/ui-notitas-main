const express = require('express');
const router = express.Router(); // parte de express que me permite generar rutas, no hace falta ponerle un nombre especifico, este se lo doy en app.js cuando lo requiero
const notasController = require('../controllers/notasController');

router.get('/', notasController.index);

module.exports = router; // disponibilizar