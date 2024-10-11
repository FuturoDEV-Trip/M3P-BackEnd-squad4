const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config');

const connection = new Sequelize(databaseConfig);

async function testConnection() {
    try {
        await connection.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

testConnection();

module.exports = { connection };
