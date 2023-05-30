const express = require('express');
const experienciasController = require('../controllers/experienciaController')

const router = express.Router();

router.get('/', experienciasController.getAllExperiencias);
router.get('/:id', experienciasController.getExperienciasById);
router.post('/',experienciasController.createExperiencia);
router.put('/:id',experienciasController.updateExperiencia);
router.delete('/:id',experienciasController.deleteExperiencia);


module.exports = router;