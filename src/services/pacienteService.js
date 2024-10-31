const Paciente = require('../models/Paciente'); 
const Prontuario = require('../models/Prontuario');
const Acompanhamento = require('../models/Acompanhamento');

exports.listarPacientes = async () => {
  return await Paciente.findAll();
};

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

  // obter prontuario do paciente, e acompanhamentos do prontuario, excluir primeiro os acompanhamentos, depois o prontuario, e por fim o paciente 

  const prontuario = await Prontuario.findOne({ where: { paciente_id: id } });

  if (prontuario) {
    const acompanhamentos = await Acompanhamento.findAll({ where: { prontuario_id: prontuario.id } });
    if (acompanhamentos.length > 0) {
      await Acompanhamento.destroy({ where: { prontuario_id: prontuario.id } });
    }
    await prontuario.destroy();
  }

  return await paciente.destroy();
};
