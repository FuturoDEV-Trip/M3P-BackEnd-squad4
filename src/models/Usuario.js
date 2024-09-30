const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const { hash } = require('bcryptjs')

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
    },
    sexo: {
        type: DataTypes.ENUM('feminino', 'masculino', 'outro'),
    },
    cpf: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    cep: {
        type: DataTypes.STRING,
    },
    endereco: {
        type: DataTypes.STRING,
    },
    numero: {
        type: DataTypes.INTEGER,
      },
      
      complemento: {
        type: DataTypes.STRING,
      },

    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    }
})

Usuario.beforeSave(async (usuario) => {
    usuario.password = await hash(usuario.password, 8) 
    return usuario
})

module.exports = Usuario
