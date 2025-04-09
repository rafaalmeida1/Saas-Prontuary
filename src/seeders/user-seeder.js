'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hash the password "123"
    const hash = await bcrypt.hash('123', 10);
    
    // Create the default user
    await queryInterface.bulkInsert('usuario', [
      {
        username: 'esperanca_vida',
        password: hash,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    console.log('Default user "esperanca_vida" created successfully');
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the default user
    await queryInterface.bulkDelete('usuario', { username: 'esperanca_vida' }, {});
  }
}; 