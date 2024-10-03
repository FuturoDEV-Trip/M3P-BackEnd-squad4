'use strict';

const Usuario = require("../../models/Usuario")
const Local = require("../../models/Local")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(Usuario.tableName, Usuario.tableAttributes);
    await queryInterface.createTable(Local.tableName, Local.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Usuario.tableName);
    await queryInterface.dropTable(Local.tableName);
  }
};
