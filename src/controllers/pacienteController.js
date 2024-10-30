const PacienteService = require('../services/pacienteService');

exports.criarPaciente = async (req, res) => {
  try {
    const paciente = await PacienteService.criarPaciente(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarPacientes = async (req, res) => {
  try {
    const pacientes = await PacienteService.listarPacientes();
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.obterPaciente = async (req, res) => {
  try {
    const paciente = await PacienteService.obterPaciente(req.params.id);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.atualizarPaciente = async (req, res) => {
  try {
    const paciente = await PacienteService.atualizarPaciente(req.params.id, req.body);
    res.status(200).json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletarPaciente = async (req, res) => {
  try {
    await PacienteService.deletarPaciente(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
