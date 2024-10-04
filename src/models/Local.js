const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Usuario = require("./Usuario")

const Local = connection.define('locais', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Usuario,
          key: 'id'
        }        
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    localidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    coordenadas_geograficas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    updatedAt: {
        type: DataTypes.DATE
    }    
})

Usuario.hasMany(Local, {
    foreignKey: 'usuario_id',
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
})

module.exports = Local