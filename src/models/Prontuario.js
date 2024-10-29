const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Paciente = require('./Paciente');

const Prontuario = sequelize.define('Prontuario', {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  historico_saude: DataTypes.TEXT,
  historico_nutricional: DataTypes.TEXT,
  observacoes: DataTypes.TEXT,
  nivel_assistencia_nutricao: DataTypes.STRING,
  condicao_fisica: DataTypes.STRING,
  presenca_edema: DataTypes.BOOLEAN,
  localizacao_edema: DataTypes.STRING,
  avaliacao_subjetiva: DataTypes.STRING,
  apresenta_lipodistrofia: DataTypes.BOOLEAN,
  localizacao_lipodistrofia: DataTypes.STRING,
  frequencia_defecacao: DataTypes.STRING,
  caracteristicas_fezes: DataTypes.STRING,
  frequencia_miccao: DataTypes.STRING,
  caracteristicas_urina: DataTypes.STRING,
  qualidade_sono: DataTypes.STRING,
  hora_dormir: DataTypes.STRING,
  hora_acordar: DataTypes.STRING,
  sinais_e_sintomas: DataTypes.TEXT,
  historico_atual_patologias: DataTypes.TEXT,
  medicacoes_atuais: DataTypes.TEXT,
  dificuldade_engolir: DataTypes.STRING,
  classificacao_apetite: DataTypes.STRING,
  ingestao_alimentar: DataTypes.TEXT,
  tipo_dieta_atual: DataTypes.STRING,
  alimentos_preferidos: DataTypes.TEXT,
  alimentos_menos_preferidos: DataTypes.TEXT,
  alergias: DataTypes.BOOLEAN,
  alergia_detalhes: DataTypes.TEXT,
  queixas_reclamacoes: DataTypes.TEXT,
  periodo_avaliacao: DataTypes.STRING,
  mes: DataTypes.STRING,
  evolucao_dietoterapica: DataTypes.TEXT,
  alteracoes_patologicas_farmacologicas: DataTypes.TEXT,
  tipo_prescricao: DataTypes.STRING,
  prescricao_detalhada: DataTypes.TEXT,
}, { tableName: 'prontuario', timestamps: true });

Prontuario.belongsTo(Paciente, { foreignKey: 'paciente_id' });

module.exports = Prontuario;
