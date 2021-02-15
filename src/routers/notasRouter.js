const express = require('express');
const router = express.Router(); // parte de express que me permite generar rutas, no hace falta ponerle un nombre especifico, este se lo doy en app.js cuando lo requiero
const notasController = require('../controllers/notasController');

router.get('/', notasController.index);
router.put('/', notasController.create);
router.delete("/:id", notasController.delete);

router.get("/edit/:id", notasController.edit);
router.put("/edit/:id", notasController.editSave);

module.exports = router; // disponibilizar


// No lo logre hacer andar T_T halp cuando creo una nota nueva me sale:
//Executing (default): SELECT `id`, `titulo`, `texto`, `created_at` AS `createdAt`, `updated_at` AS `updatedAt`, `deleted_at` AS `deletedAt` FROM `notas` AS `Nota` WHERE (`Nota`.`deleted_at` IS NULL);
//Executing (default): SELECT `id`, `titulo`, `texto`, `created_at` AS `createdAt`, `updated_at` AS `updatedAt`, `deleted_at` AS `deletedAt` FROM `notas` AS `Nota` WHERE (`Nota`.`deleted_at` IS NULL);