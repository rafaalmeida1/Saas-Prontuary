const express = require('express');
const ProntuarioController = require('../controllers/prontuarioController');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');

// Rotas para Prontuário
router.post('/', ProntuarioController.createProntuario);
router.get('/:id', ProntuarioController.getProntuarioById); 
router.get('/paciente/:id', ProntuarioController.getProntuarioByPatientId);
router.put('/:id', ProntuarioController.updateProntuario);
router.delete('/:id', ProntuarioController.deleteProntuario);

// Rotas para Acompanhamento
router.post('/:prontuario_id/acompanhamento', ProntuarioController.createAcompanhamento);
router.get('/:prontuario_id/acompanhamentos', ProntuarioController.getAcompanhamentosByProntuario);
router.get('/acompanhamento/:id', ProntuarioController.getAcompanhamentoById);
router.put('/acompanhamento/:id', ProntuarioController.updateAcompanhamento);
router.delete('/acompanhamento/:id', ProntuarioController.deleteAcompanhamento);

// Adicionar rota para buscar todos os prontuários
router.get('/todos', verifyToken, ProntuarioController.getTodos);

// Adicionar rota para obter estatísticas de acompanhamentos
router.get('/acompanhamentos/stats', verifyToken, ProntuarioController.getAcompanhamentoStats);

module.exports = router;
