const { Sequelize } = require('sequelize');
const config = require('./config');

// Defina o ambiente com base na variável de ambiente NODE_ENV
const env = process.env.NODE_ENV || 'development';
const dbConfig = config.db;

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  logging: false,
  storage: dbConfig.storage,
  timezone: '-03:00',
});


module.exports = sequelize;
