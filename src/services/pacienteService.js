const Paciente = require('../models/Paciente');

exports.criarPaciente = async (dadosPaciente) => {
  return await Paciente.create(dadosPaciente);
};

exports.obterPaciente = async (id) => {
  const paciente = await Paciente.findByPk(id);
  if (!paciente) throw new Error('Paciente não encontrado');
  return paciente;
};

exports.atualizarPaciente = async (id, dadosAtualizados) => {
  const paciente = await this.obterPaciente(id);
  return await paciente.update(dadosAtualizados);
};

exports.deletarPaciente = async (id) => {
  const paciente = await this.obterPaciente(id);
  return await paciente.destroy();
};
