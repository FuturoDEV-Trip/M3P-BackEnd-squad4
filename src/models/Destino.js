const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Destino = connection.define('destinos', {
    usuario_id: {
        type: DataTypes.INTEGER,
    },
    nome_do_destino: {
        type: DataTypes.STRING,
    },
    descricao: {
        type: DataTypes.TEXT,
    },
    localidade: {
        type: DataTypes.STRING,
    },
    cep: {
        type: DataTypes.STRING,
    },
    coordenadas_geograficas: {
        type: DataTypes.STRING,
    }    
})

module.exports = Destino