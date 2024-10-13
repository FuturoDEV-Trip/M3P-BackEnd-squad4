const { config } = require('dotenv');
const pg = require('pg');
config();

module.exports = {
  dialect: process.env.DIALECT || 'postgres',
  dialectModule: pg,
  host: process.env.HOST,
  username: process.env.USERNAMEDB,
  password: process.env.PASSWORDDB,
  database: process.env.DATABASE,
  port: process.env.PORT || 5432,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
      require: true
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
};