const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const sequelize = require('../config/database');

async function createDefaultUser() {
  try {
    // Conectar ao banco de dados
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida.');

    // Hash da senha "123"
    const hash = await bcrypt.hash('123', 10);
    
    // Verificar se o usuário já existe
    const existingUser = await Usuario.findOne({ where: { username: 'esperanca_vida' } });
    
    if (existingUser) {
      console.log('O usuário "esperanca_vida" já existe. Pulando criação.');
      return;
    }
    
    // Criar o usuário padrão
    const usuario = await Usuario.create({
      username: 'esperanca_vida',
      password: hash,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    console.log('Usuário padrão "esperanca_vida" criado com sucesso!');
    console.log('Username: esperanca_vida');
    console.log('Senha: 123');
    console.log('Função: admin');
  } catch (error) {
    console.error('Erro ao criar usuário padrão:', error);
  } finally {
    // Fechar a conexão
    await sequelize.close();
  }
}

// Executar a função
createDefaultUser(); 