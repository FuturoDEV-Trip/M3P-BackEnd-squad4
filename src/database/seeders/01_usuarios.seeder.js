const { queryInterface, Sequelize } = require("sequelize");
const { hash } = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('usuarios',[
            {
                nome: "Rebeca Verissimo",
                sexo: "feminino",
                cpf: "70711122233",
                data_nascimento: "1997-11-13",
                cep: "88117351",
                endereco: "Barreiros, São José, Rua Santo Antônio, Santa Catarina, Brasil",
                numero: "123",
                complemento: "apartamento 12",
                email: "example1@gmail.com",
                password: await hash("senha1", 8),
                createdAt: new Date('2024-05-05'),
                updatedAt: new Date('2024-05-05')    },
            {
                nome: "Alana Daniele de Oliveira Carneiro",
                sexo: "feminino",
                cpf: "79744455566",
                data_nascimento: "1989-07-24",
                cep: "89117351",
                endereco: "Barreiros, São José, Rua Santo Antônio, Santa Catarina, Brasil",
                numero: "123",
                complemento: "apartamento 12",
                email: "alana@email.com",
                password: await hash("senha123", 8),
                createdAt: new Date('2024-05-05'),
                updatedAt: new Date('2024-05-05') 
            },

            {
                nome: "Ingo Strunck Junior",
                sexo: "masculino",
                cpf: "70744455569",
                data_nascimento: "1989-07-24",
                cep: "88010002",
                endereco: "Rua Felipe Shimidt, Centro, Florianópolis, Santa Catarina, Brasil",
                numero: "123",
                complemento: "casa",
                email: "ingo@email.com",
                password: await hash("senha123", 8),
                createdAt: new Date('2024-05-05'),
                updatedAt: new Date('2024-05-05') 
            },

            {
                nome: "Bruno Costa Figueiredo",
                sexo: "masculino",
                cpf: "70723455566",
                data_nascimento: "1999-07-24",
                cep: "63505518",
                endereco: "Rua Ademar Gomes Pereira, Iguatu, Ceará, Brasil",
                numero: "123",
                complemento: "apartamento 12",
                email: "bruno@email.com",
                password: await hash("senha123", 8),
                createdAt: new Date('2024-05-05'),
                updatedAt: new Date('2024-05-05') 
            },

            {
                nome: "Keeity Braga Collodel",
                sexo: "feminino",
                cpf: "70744456566",
                data_nascimento: "1986-07-24",
                cep: "88063300",
                endereco: "Avenida campeche, Campeche, Florianópolis",
                numero: "123",
                complemento: "casa",
                email: "keeity@email.com",
                password: await hash("senha123", 8),
                createdAt: new Date('2024-05-05'),
                updatedAt: new Date('2024-05-05') 
            }
        ])
    }
}

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('usuarios', {
            email: [
                "example1@gmail.com", 
                "alana@email.com",
                "keeity@email.com",
                "bruno@email.com",
                "ingo@email.com",
                

            ] 
        });
    };
