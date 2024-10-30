const Acompanhamento = require('../models/Acompanhamento');
const Prontuario = require('../models/Prontuario');

class ProntuarioController {
  // Criar um prontuário para um paciente
  static async createProntuario(req, res) {
    try {
      const prontuarioData = req.body 

      const prontuario = await Prontuario.create(prontuarioData);
      return res.status(201).json(prontuario);
    } catch (error) {
      console.error("Erro ao criar prontuário:", error);
      return res.status(500).json({ error: "Erro ao criar prontuário" });
    }
  }

  // Obter um prontuário por ID
  static async getProntuarioById(req, res) {
    try {
      const { id } = req.params;
      const prontuario = await Prontuario.findByPk(id);
      if (!prontuario) return res.status(404).json({ error: "Prontuário não encontrado" });
      return res.status(200).json(prontuario);
    } catch (error) {
      console.error("Erro ao obter prontuário:", error);
      return res.status(500).json({ error: "Erro ao obter prontuário" });
    }
  }

  static async getProntuarioByPatientId(req, res) {
    try {
      const { id } = req.params;
      const prontuario = await Prontuario.findOne({ where: { paciente_id: id } });
      if (!prontuario) return res.status(404).json({ error: "Prontuário não encontrado" });
      return res.status(200).json(prontuario);
    } catch (error) {
      console.error("Erro ao obter prontuário:", error);
      return res.status(500).json({ error: "Erro ao obter prontuario" });
    }
  }

  // Atualizar um prontuário
  static async updateProntuario(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Prontuario.update(req.body, { where: { id } });
      if (!updated) return res.status(404).json({ error: "Prontuário não encontrado" });
      return res.status(200).json({ message: "Prontuário atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar prontuário:", error);
      return res.status(500).json({ error: "Erro ao atualizar prontuário" });
    }
  }

  // Excluir um prontuário
  static async deleteProntuario(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Prontuario.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ error: "Prontuário não encontrado" });
      return res.status(200).json({ message: "Prontuário excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir prontuário:", error);
      return res.status(500).json({ error: "Erro ao excluir prontuário" });
    }
  }

  // Criar acompanhamento para um prontuário específico
  static async createAcompanhamento(req, res) {
    try {
      const { prontuario_id } = req.params;
      const acompanhamentoData = { ...req.body, prontuario_id };
      const prontuarioExists = await Prontuario.findByPk(prontuario_id);
      if (!prontuarioExists) return res.status(404).json({ error: "Prontuário não encontrado" });
      
      const acompanhamento = await Acompanhamento.create(acompanhamentoData);
      return res.status(201).json(acompanhamento);
    } catch (error) {
      console.error("Erro ao criar acompanhamento:", error);
      return res.status(500).json({ error: "Erro ao criar acompanhamento" });
    }
  }

  // Obter todos os acompanhamentos de um prontuário
  static async getAcompanhamentosByProntuario(req, res) {
    try {
      const { prontuario_id } = req.params;
      const acompanhamentos = await Acompanhamento.findAll({ where: { prontuario_id } });
      return res.status(200).json(acompanhamentos);
    } catch (error) {
      console.error("Erro ao obter acompanhamentos:", error);
      return res.status(500).json({ error: "Erro ao obter acompanhamentos" });
    }
  }

  // Obter um acompanhamento específico por ID
  static async getAcompanhamentoById(req, res) {
    try {
      const { id } = req.params;
      const acompanhamento = await Acompanhamento.findByPk(id);
      if (!acompanhamento) return res.status(404).json({ error: "Acompanhamento não encontrado" });
      return res.status(200).json(acompanhamento);
    } catch (error) {
      console.error("Erro ao obter acompanhamento:", error);
      return res.status(500).json({ error: "Erro ao obter acompanhamento" });
    }
  }

  // Atualizar um acompanhamento específico
  static async updateAcompanhamento(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Acompanhamento.update(req.body, { where: { id } });
      if (!updated) return res.status(404).json({ error: "Acompanhamento não encontrado" });
      return res.status(200).json({ message: "Acompanhamento atualizado com sucesso" });
    } catch (error) {
      console.error("Erro ao atualizar acompanhamento:", error);
      return res.status(500).json({ error: "Erro ao atualizar acompanhamento" });
    }
  }

  // Excluir um acompanhamento específico
  static async deleteAcompanhamento(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Acompanhamento.destroy({ where: { id } });
      if (!deleted) return res.status(404).json({ error: "Acompanhamento não encontrado" });
      return res.status(200).json({ message: "Acompanhamento excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir acompanhamento:", error);
      return res.status(500).json({ error: "Erro ao excluir acompanhamento" });
    }
  }
}

module.exports = ProntuarioController;
