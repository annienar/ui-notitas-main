const express = require('express');
const router = express.Router(); // parte de express que me permite generar rutas, no hace falta ponerle un nombre especifico, este se lo doy en app.js cuando lo requiero
const notasController = require('../controllers/notasController');

router.get('/', notasController.index);
router.put('/', notasController.create);
router.delete("/:id", notasController.delete);

router.get("/edit/:id", notasController.edit);
router.put("/edit/:id", notasController.editSave);

module.exports = router; // disponibilizar