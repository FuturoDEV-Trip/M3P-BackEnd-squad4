// const { Sequelize } = require('sequelize');
// const databaseConfig = require('../config/database.config');

// const connection = new Sequelize(databaseConfig);

// async function testConnection() {
//     try {
//         await connection.authenticate();
//         console.log('Conexão com o banco de dados estabelecida com sucesso.');
//     } catch (error) {
//         console.error('Erro ao conectar ao banco de dados:', error);
//     }
// }

// testConnection();

// module.exports = { connection };



//outra tentativa

// const { Sequelize } = require('sequelize');
// const databaseConfig = require('../config/database.config');

// const sequelize = new Sequelize(
//     databaseConfig.database,
//     databaseConfig.username,
//     databaseConfig.password,
//     {
//         host: databaseConfig.host,
//         dialect: 'postgres',
//         port: databaseConfig.port || 5432,
//         logging: false,
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }
// );


// sequelize.authenticate()
//     .then(() => {
//         console.log('Conexão com o banco de dados estabelecida com sucesso.');
//     })
//     .catch(err => {
//         console.error('Erro ao conectar ao banco de dados:', err);
//     });

// module.exports = sequelize;

// vai dar bom

const { Sequelize } = require('sequelize');
const databaseConfig = require("../config/database.config");

const connection = new Sequelize(databaseConfig);

module.exports = { connection };