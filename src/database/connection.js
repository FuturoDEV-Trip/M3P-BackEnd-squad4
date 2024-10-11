const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config');

const connection = new Sequelize(
    databaseConfig.database,        // Nome do banco de dados
    databaseConfig.username,        // Nome de usuário
    databaseConfig.password,        // Senha do banco de dados
    {
        host: databaseConfig.host,    // Host do banco de dados
        dialect: databaseConfig.dialect, // Dialeto (ex: 'mysql', 'postgres', etc.)
        port: databaseConfig.port,    // Porta do banco de dados
        logging: false                // Desabilita o logging para evitar poluição dos logs
    }
);

// Teste de conexão
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