const Local = require('../models/Local')
const Usuario = require('../models/Usuario')

const { openStreetMap } = require('../service/map.service')

class UsuarioController {

    async cadastrar(req, res) {
        /*  
            #swagger.tags = ['Usuario'],
            #swagger.summary = 'Cadastrar Usuario',
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Usuario',
                schema: {
                    $nome: "Seu nome",
                    $sexo: "feminino, masculino ou outro",
                    $cpf: "12345678901",
                    $data_nascimento: "aaaa-mm-dd",
                    $cep: "12345678",
                    endereco: "seu endereço",
                    $numero: 000,
                    $complemento: "# do seu apartamento",
                    $email: "teste123@gmail.com",
                    $password: "sua senha",                    
            }
        }
    */
        try{            
            const nome = req.body.nome            
            const sexo = req.body.sexo
            const cpf = req.body.cpf
            const data_nascimento = req.body.data_nascimento
            const cep = req.body.cep
            let endereco = req.body.endereco
            const numero = req.body.numero
            const complemento = req.body.complemento
            const email = req.body.email
            const password = req.body.password
                                
                                    
            // if(!endereco) {
            //     const resposta = await openStreetMap(cep)
            //     console.log(resposta)
            //     endereco = resposta.display_name                
            // }                       
        
                
            const usuario = await Usuario.create({                
                nome: nome,
                sexo: sexo,
                cpf: cpf,
                data_nascimento: data_nascimento,
                cep: cep,
                endereco: endereco,
                numero: numero,
                complemento: complemento,
                email: email,
                password: password
            })
            res.status(201).json(usuario)
             
        } catch (error){
            console.log(error.message)
            if (error.message.includes('CEP'))
                return res.status(400).json({message: error.message})
    
            if (error.message.includes('duplicada'))
                return res.status(400).json({message: "O email ou cpf já foi registrado"})
    
            return res.status(500).json({message: "Não foi possivel cadastrar o usuario"})
        }
    }

    async listar(req, res) {
        /*  
            #swagger.tags = ['Usuario'],
            #swagger.summary = 'Listar todos os Usuario'                
        */
        try {
            const usuarios = await Usuario.findAll({
                where: {},
                order: [['id', 'ASC']]})
            res.json(usuarios)
        } catch (error) {
            res.status(500).json({message: 'Não possível listar os usuarios' })
        }
    }


    async listarUm(req, res){
        try{
            /*  
            #swagger.tags = ['Usuario'],
            #swagger.summary = 'Listar usuário pelo ID'
                #swagger.parameters['id'] = {
            in: 'path',
            required: true,
          description: 'Informe o ID do Usuário. Ex: 1',
            required: true
        */
            const { id } = req.params
            const usuario = await Usuario.findByPk(id)
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado!" })
            }
               res.status(200).json(usuario)           

        } catch (error) {
            console.error(`Erro ao buscar usuario: ${error}`);
            return res.status(500).json({ error: 'Erro interno do servidor' });
          }
        }


    async atualizar(req,res) {
        /*  
            #swagger.tags = ['Usuario'],
            #swagger.summary = 'Atualizar dados de um Usuario', 
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza dados de um Usuario',
                schema: {
                    $nome: "Atualizar nome",
                    $sexo: "feminino, masculino ou outro",
                    $cpf: "12345678901",
                    $data_nascimento: "aaaa-mm-dd",
                    $cep: "12345678",
                    endereco: "Atualizar seu endereço",
                    $numero: 000,
                    $complemento: "# do seu apartamento",
                    $email: "teste123@gmail.com",
                    $password: "sua senha",                    
            }
        }
    */
        const { id } = req.params
        const newData = req.body

        let usuario = await Usuario.findByPk(id)
        if (!usuario){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }

        try{
            if(usuario.cep != newData.cep && !newData.endereco) {
                const resposta = await openStreetMap(newData.cep)
                console.log(resposta)
                newData.endereco = resposta.display_name                
            }  

            await usuario.update(newData, {where:{id:id}})
            res.status(200).json(usuario)  
            
        } catch (error){
            console.log(error.message)
            if (error.message.includes('CEP'))
                return res.status(400).json({message: error.message})
        }      
    }

    async deletar(req,res) {

        /*  
            #swagger.tags = ['Usuario'],
            #swagger.summary = 'Deletar um Usuario' 
        */
        const { id } = req.params
        try {
            const usuario = await Usuario.findByPk(id)
            if(!usuario){
                return res.status(404).json({message: 'Usuario não encontrado'})
            }
            const count = await Local.count({         //Não pode ser deletado um usuario se tem algum local associado
                where: {
                usuario_id: id
                }
            })

            if (count > 0){
                return res.status(400).json({message: 'Não é possível deletar este usuario porque tem locais associados'})
            }

            usuario.destroy({
                where: {
                id:id
                }
            })
            return res.status(204).json({})

        } catch (error) {            
            console.log(error)
            return res.status(500).send(error)
        }        
    }


}

module.exports = new UsuarioController()