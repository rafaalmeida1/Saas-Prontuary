const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Paciente = sequelize.define('Paciente', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  genero: DataTypes.STRING,
  raca: DataTypes.STRING,
  data_entrada_clinica: DataTypes.DATE,
  data_nascimento: DataTypes.DATE,
  imagem_url: DataTypes.TEXT,
}, { tableName: 'paciente', timestamps: true });

module.exports = Paciente;
