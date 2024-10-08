const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const { hash } = require('bcryptjs')

const Usuario = connection.define('usuarios', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.ENUM('feminino', 'masculino', 'outro'),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },      
    complemento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
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

Usuario.beforeSave(async (usuario) => {
    usuario.password = await hash(usuario.password, 8);
    usuario.cpf = await hash(usuario.cpf, 8) 
    return usuario
})

module.exports = Usuario
