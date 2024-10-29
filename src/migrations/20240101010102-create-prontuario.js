'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prontuario', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      paciente_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'paciente',
          key: 'id'
        }
      },
      historico_saude: Sequelize.TEXT,
      historico_nutricional: Sequelize.TEXT,
      observacoes: Sequelize.TEXT,
      nivel_assistencia_nutricao: Sequelize.STRING,
      condicao_fisica: Sequelize.STRING,
      presenca_edema: Sequelize.BOOLEAN,
      localizacao_edema: Sequelize.STRING,
      avaliacao_subjetiva: Sequelize.STRING,
      apresenta_lipodistrofia: Sequelize.BOOLEAN,
      localizacao_lipodistrofia: Sequelize.STRING,
      frequencia_defecacao: Sequelize.STRING,
      caracteristicas_fezes: Sequelize.STRING,
      frequencia_miccao: Sequelize.STRING,
      caracteristicas_urina: Sequelize.STRING,
      qualidade_sono: Sequelize.STRING,
      hora_dormir: Sequelize.STRING,
      hora_acordar: Sequelize.STRING,
      sinais_e_sintomas: Sequelize.TEXT,
      historico_atual_patologias: Sequelize.TEXT,
      medicacoes_atuais: Sequelize.TEXT,
      dificuldade_engolir: Sequelize.STRING,
      classificacao_apetite: Sequelize.STRING,
      ingestao_alimentar: Sequelize.TEXT,
      tipo_dieta_atual: Sequelize.STRING,
      alimentos_preferidos: Sequelize.TEXT,
      alimentos_menos_preferidos: Sequelize.TEXT,
      alergias: Sequelize.BOOLEAN,
      alergia_detalhes: Sequelize.TEXT,
      queixas_reclamacoes: Sequelize.TEXT,
      periodo_avaliacao: Sequelize.STRING,
      mes: Sequelize.STRING,
      evolucao_dietoterapica: Sequelize.TEXT,
      alteracoes_patologicas_farmacologicas: Sequelize.TEXT,
      tipo_prescricao: Sequelize.STRING,
      prescricao_detalhada: Sequelize.TEXT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('prontuario');
  }
};
