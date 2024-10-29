require('dotenv').config();

const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  port: process.env.PORT || 8000,
  db: {
    username: isTest ? null : process.env.DB_USERNAME,
    password: isTest ? null : process.env.DB_PASSWORD,
    database: isTest ? null : process.env.DB_DATABASE,
    port: isTest ? null : process.env.DB_PORT,
    host: isTest ? null : process.env.DB_HOST,
    dialect: isTest ? 'sqlite' : 'mysql',
    dialectOptions: isTest ? { ssl: { rejectUnauthorized: false } } : { ssl: {require: true, rejectUnauthorized: false} },
    storage: isTest ? ':memory:' : undefined,
  },
  jwtSecret: process.env.JWT_SECRET,
  email: {
    service: process.env.EMAIL_SERVICE,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  queue: {
    url: process.env.RABBITMQ_URL,
  },
};