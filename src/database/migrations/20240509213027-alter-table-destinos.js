'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
      await queryInterface.changeColumn('destinos', 'descricao', {
        type: Sequelize.TEXT,
      });
  
      
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('destinos', 'descricao', {
      type: Sequelize.STRING,
    });
  }
};
