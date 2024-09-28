const { QueryInterface, Sequelize } = require("sequelize");
const Usuario = require("../../models/Usuario");
const { hash } = require('bcryptjs')

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Usuario.bulkCreate([
            {
                nome: "Rebeca Verissimo",
                sexo: "feminino",
                cpf: "70711122233",
                data_nascimento: "1997-11-13",
                cep: "88117351",
                endereco: "Barreiros, São José, Rua Santo Antônio, Santa Catarina, Región Sur, Brasil",
                email: "example1@gmail.com",
                password: await hash("senha1", 8)
            },
            {
                nome: "Edder Salazar",
                sexo: "masculino",
                cpf: "70744455566",
                data_nascimento: "1989-07-24",
                cep: "88117351",
                endereco: "Barreiros, São José, Rua Santo Antônio, Santa Catarina, Región Sur, Brasil",
                email: "example2@gmail.com",
                password: await hash("senha1", 8)
            }
        ])
    },

    down: async (QueryInterface, Sequelize) => {
        await Usuario.destroy({
            email: [
                "example1@gmail.com", 
                "example2@gmail.com"
            ] 
        })
    }
}