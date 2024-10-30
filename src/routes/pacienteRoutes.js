const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const { verifyToken } = require('../utils/auth');

router.post('/', verifyToken, pacienteController.criarPaciente);
router.get('/', verifyToken, pacienteController.listarPacientes);
router.get('/:id', verifyToken, pacienteController.obterPaciente);
router.put('/:id', verifyToken, pacienteController.atualizarPaciente);
router.delete('/:id', verifyToken, pacienteController.deletarPaciente);

module.exports = router;
