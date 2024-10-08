const Local = require('../models/Local')

const { getCepCoordinates } = require('../service/map.service')

class LocalController {

    async cadastrar(req, res) {
         /*  
            #swagger.tags = ['Local'],
            #swagger.summary = 'Adicionar um local', 
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um Local',
                schema: {         
                    $nome: "nome do local",
                    $descricao: "descrição",
                    $localidade: "localidade",
                    $cep: "12345678"                                        
            }
        }
    */
        
        try{                       
            const usuario_id = req.payload.sub           
            const nome = req.body.nome
            const descricao = req.body.descricao
            const localidade = req.body.localidade
            const cep = req.body.cep
            let coordenadas_geograficas = req.body.coordenadas_geograficas
                            
                    // retirado para não fazer duas chamadas API
            // const resposta = await getCepCoordinates(cep)
            //       console.log(resposta)
            //       coordenadas_geograficas = JSON.stringify(resposta) 
       
            const local = await Local.create({   
                usuario_id: usuario_id,             
                nome: nome,
                descricao: descricao,
                localidade: localidade,
                cep: cep,
                coordenadas_geograficas: coordenadas_geograficas
            })
            local.coordenadas_geograficas = JSON.parse(local.coordenadas_geograficas) //Converte um json recebido como string em um objeto javascript

            res.status(201).json(local)
             
        } catch (error){
            console.log(error.message)
            if (error.message.includes('CEP'))
            return res.status(400).json({message: error.message})

            return res.status(500).json({message: "Não foi possivel cadastrar o destino"})
        }
    }

    async listar(req, res) {
        /*  
            #swagger.tags = ['Local'],
            #swagger.summary = 'Listar os locais existentes'
        */
        try {
            const locais = await Local.findAll({             
                order: [['id', 'ASC']]})

            locais.forEach(local => {
                if (local.coordenadas_geograficas)
                local.coordenadas_geograficas = JSON.parse(local.coordenadas_geograficas)   //Converte um json recebido como string em um objeto javascript
            })
                
            res.json(locais)
        } catch (error) {
            res.status(500).json({message: 'Não possível listar os locais' })
        }
    }

    async listarUm(req, res){
        try{
            /*  
            #swagger.tags = ['Local'],
            #swagger.summary = 'Listar local pelo ID'
            #swagger.parameters['id'] = {
                in: 'path',
                required: true,
                description: 'Informe o ID do local. Ex: 1',
                required: true}
        */
            const { id } = req.params
            const local = await Local.findByPk(id)
            if (!local) {
                return res.status(404).json({ message: "Local não encontrado!" })
            }
            if (local.coordenadas_geograficas)
                local.coordenadas_geograficas = JSON.parse(local.coordenadas_geograficas)   //Converte um json recebido como string em um objeto javascript
            return res.status(200).json(local)           

        } catch (error) {
            return res.status(500).json({error:'Erro interno do servidor'})
        }
    }

    async atualizar(req,res) {       
        /*  
            #swagger.tags = ['Local'],
            #swagger.summary = 'Atualizar um local do usuario activo',
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza dados de um Local',
                schema: {         
                    $nome: "nome do local",
                    $descricao: "descrição",
                    $localidade: "localidade",
                    $cep: "12345678"                                        
            }
        }
    */ 
            const { id } = req.params
            const newData = req.body
            
            let local = await Local.findOne({
                where: {usuario_id:req.payload.sub, id:id},     //Somente o proprietário do local pode atualizar seus locais
            })
            if (!local){
                return res.status(404).json({message: 'Local não encontrado'})               
            }
            newData.usuario_id = req.payload.sub

            try{
                if(local.cep != newData.cep) {
                    const resposta = await getCepCoordinates(newData.cep)
                    console.log(resposta)
                    newData.coordenadas_geograficas = JSON.stringify(resposta)                                  
                }  
    
                const newLocal = await local.update(newData, {where:{id:id}})

                newLocal.coordenadas_geograficas = JSON.parse(newLocal.coordenadas_geograficas) //Converte um json recebido como string em um objeto javascript
                res.status(200).json(newLocal)  
                
            } catch (error){
                console.log(error.message)
                if (error.message.includes('CEP'))
                    return res.status(400).json({message: error.message})
            }           
    }
       

    async deletar(req,res) {
        /*  
            #swagger.tags = ['Local'],
            #swagger.summary = 'Deletar um local do usuario activo'
        */
        const { id } = req.params

        const local = await Local.findOne({
            where: {usuario_id:req.payload.sub, id:id},     //Somente o proprietário do local pode excluir seus propios locais
        })
        if(!local){
            return res.status(404).json({message: 'Local não encontrado'})
        }

        local.destroy({
            where: {
            id:id
            }
        })

        return res.status(204).json({})
    }


}

module.exports = new LocalController()