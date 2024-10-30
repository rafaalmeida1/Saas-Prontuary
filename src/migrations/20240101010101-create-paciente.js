'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('paciente', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero: Sequelize.STRING,
      raca: Sequelize.STRING,
      data_entrada_clinica: Sequelize.DATE,
      data_nascimento: Sequelize.DATE,
      imagem_url: Sequelize.LONGTEXT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('paciente');
  }
};
