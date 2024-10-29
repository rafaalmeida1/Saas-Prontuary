const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Prontuario = require('./Prontuario');

const Acompanhamento = sequelize.define('Acompanhamento', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  data: DataTypes.DATE,
  peso_direito: DataTypes.DOUBLE,
  altura_direita: DataTypes.DOUBLE,
  imc_direito: DataTypes.DOUBLE,
  porcentagem_gordura_direita: DataTypes.DOUBLE,
  altura_joelho_direito: DataTypes.DOUBLE,
  braco_direito: DataTypes.DOUBLE,
  punho_direito: DataTypes.DOUBLE,
  panturrilha_direita: DataTypes.DOUBLE,
  circunferencia_abdomen_direito: DataTypes.DOUBLE,
  circunferencia_pescoco_direito: DataTypes.DOUBLE,
  peso_esquerdo: DataTypes.DOUBLE,
  altura_esquerda: DataTypes.DOUBLE,
  imc_esquerdo: DataTypes.DOUBLE,
  porcentagem_gordura_esquerda: DataTypes.DOUBLE,
  altura_joelho_esquerdo: DataTypes.DOUBLE,
  braco_esquerdo: DataTypes.DOUBLE,
  punho_esquerdo: DataTypes.DOUBLE,
  panturrilha_esquerda: DataTypes.DOUBLE,
  circunferencia_abdomen_esquerda: DataTypes.DOUBLE,
  circunferencia_pescoco_esquerdo: DataTypes.DOUBLE,
}, { tableName: 'acompanhamento', timestamps: true });

Acompanhamento.belongsTo(Prontuario, { foreignKey: 'prontuario_id' });

module.exports = Acompanhamento;
