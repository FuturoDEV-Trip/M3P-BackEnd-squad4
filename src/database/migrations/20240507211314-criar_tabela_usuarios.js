'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'usuarios',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },      
        nome: {
          allowNull: false,
          type: Sequelize.STRING
        },
        sexo: {
          allowNull: false,
          type: Sequelize.ENUM('feminino', 'masculino', 'outro')
        },
        cpf: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        data_nascimento: {
          allowNull: false,
          type: Sequelize.DATE
        },
        cep: {
          allowNull: false,          
          type: Sequelize.STRING
        },
        endereco: {
          allowNull: true,          
          type: Sequelize.STRING
        },
        numero_endereco: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        
        complemento: {
          type: Sequelize.STRING,
          allowNull: true,
        },

        telefone: {
          type: Sequelize.STRING,
          allowNull: true
        },

        email: {
          allowNull: false,
          unique: true,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
