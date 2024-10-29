'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('acompanhamento', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      prontuario_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'prontuario',
          key: 'id'
        }
      },
      data: Sequelize.DATE,
      peso_direito: Sequelize.DOUBLE,
      altura_direita: Sequelize.DOUBLE,
      imc_direito: Sequelize.DOUBLE,
      porcentagem_gordura_direita: Sequelize.DOUBLE,
      altura_joelho_direito: Sequelize.DOUBLE,
      braco_direito: Sequelize.DOUBLE,
      punho_direito: Sequelize.DOUBLE,
      panturrilha_direita: Sequelize.DOUBLE,
      circunferencia_abdomen_direito: Sequelize.DOUBLE,
      circunferencia_pescoco_direito: Sequelize.DOUBLE,
      peso_esquerdo: Sequelize.DOUBLE,
      altura_esquerda: Sequelize.DOUBLE,
      imc_esquerdo: Sequelize.DOUBLE,
      porcentagem_gordura_esquerda: Sequelize.DOUBLE,
      altura_joelho_esquerdo: Sequelize.DOUBLE,
      braco_esquerdo: Sequelize.DOUBLE,
      punho_esquerdo: Sequelize.DOUBLE,
      panturrilha_esquerda: Sequelize.DOUBLE,
      circunferencia_abdomen_esquerda: Sequelize.DOUBLE,
      circunferencia_pescoco_esquerda: Sequelize.DOUBLE,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('acompanhamento');
  }
};
