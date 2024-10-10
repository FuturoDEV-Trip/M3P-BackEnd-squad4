const { compare, hash } = require("bcryptjs")
const Usuario = require('../models/Usuario')
const { sign } = require('jsonwebtoken')

class LoginController {

    async login(req, res) {
        /*  
            #swagger.tags = ['Usuario'],
            #swagger.summary = 'Login do usuario',
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza dados de um Usuario',
                schema: {                    
                    $email: "seuemail@gmail.com",
                    $password: "sua senha"                    
            }
        }
        */
        try {
            const email = req.body.email
            const password = req.body.password

            if (!email) {
                return res.status(400).json({ message: 'O email é obrigatório' })
            }

            if (!password) {
                return res.status(400).json({ message: 'O password é obrigatório' })
            }

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            if (!usuario) {
                return res.status(404).json({ error: 'Nenhum usuario corresponde a email e senha fornecidos!' })
            }

            const hashSenha = await compare(password, usuario.password)

            if(hashSenha === false) {
                return res.status(403).json({message: 'Usuario não encontrado'})
            }

            await Usuario.update({ isLogged: true }, { where: { id: usuario.id } });

            const payload = { sub: usuario.id, email: usuario.email, nome: usuario.nome }

            const token = sign(payload, process.env.SECRET_JWT, {
                expiresIn: '24h'
            })

            res.status(200).json({ Token: token, user: usuario })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: error, message: 'Algo deu errado!' })
        }
    }
}

module.exports = new LoginController()