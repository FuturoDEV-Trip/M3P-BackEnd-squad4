const Destino = require('../models/Destino')

const { getCepCoordinates } = require('../service/map.service')

class DestinoController {

    async cadastrar(req, res) {
         /*  
            #swagger.tags = ['Destino'],
            #swagger.summary = 'Adicionar um destino', 
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um Destino',
                schema: {         
                    $nome_do_destino: "nome do destino",
                    $descricao: "descrição",
                    $localidade: "localidade",
                    $cep: "12345678",
                    coordenadas_geograficas: ""                                        
            }
        }
    */
        
        try{                       
            const usuario_id = req.payload.sub           
            const nome_do_destino = req.body.nome_do_destino
            const descricao = req.body.descricao
            const localidade = req.body.localidade
            const cep = req.body.cep
            let coordenadas_geograficas = req.body.coordenadas_geograficas
                            
       
            const destino = await Destino.create({   
                usuario_id: usuario_id,             
                nome_do_destino: nome_do_destino,
                descricao: descricao,
                localidade: localidade,
                cep: cep,
                coordenadas_geograficas: coordenadas_geograficas
            })
            destino.coordenadas_geograficas = JSON.parse(destino.coordenadas_geograficas) //Converte um json recebido como string em um objeto javascript

            res.status(201).json(destino)
             
        } catch (error){
            console.log(error.message)

            return res.status(500).json({message: "Não foi possivel cadastrar o destino"})
        }
    }

    async listar(req, res) {
        /*  
            #swagger.tags = ['Destino'],
            #swagger.summary = 'Listar os destinos do usuario activo'
        */
        try {
            const destinos = await Destino.findAll({
                where: {usuario_id:req.payload.sub},        //Somente o proprietário do destino pode listar seus destinos
                order: [['id', 'ASC']]})

            destinos.forEach(destino => {
                destino.coordenadas_geograficas = JSON.parse(destino.coordenadas_geograficas)   //Converte um json recebido como string em um objeto javascript
            })
                
            res.json(destinos)
        } catch (error) {
            res.status(500).json({message: 'Não possível listar os destinos' })
        }
    }

    async listarUm(req, res){
        try{
            /*  
            #swagger.tags = ['Destino'],
            #swagger.summary = 'Listar destino pelo ID do usuario activo'
        */
            const { id } = req.params
            const destino = await Destino.findOne({
                where: {usuario_id:req.payload.sub, id:id},     //Somente o proprietário do destino pode listar seus destinos
            })

            destino.coordenadas_geograficas = JSON.parse(destino.coordenadas_geograficas)   //Converte um json recebido como string em um objeto javascript
            return res.json(destino)           

        } catch (error) {
            return res.status(404).json({message:'destino não encontrado.'})
        }
    }

    async atualizar(req,res) {       
        /*  
            #swagger.tags = ['Destino'],
            #swagger.summary = 'Atualizar um destino do usuario activo',
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza dados de um Destino',
                schema: {         
                    $nome_do_destino: "nome do destino",
                    $descricao: "descrição",
                    $localidade: "localidade",
                    $cep: "12345678",
                    coordenadas_geograficas: ""                                        
            }
        }
    */ 
            const { id } = req.params
            const newData = req.body
            
            let destino = await Destino.findOne({
                where: {usuario_id:req.payload.sub, id:id},     //Somente o proprietário do destino pode atualizar seus destinos
            })
            if (!destino){
                return res.status(404).json({message: 'Destino não encontrado'})               
            }
            newData.usuario_id = req.payload.sub

            try{
                if(destino.cep != newData.cep) {
                    const resposta = await getCepCoordinates(newData.cep)
                    console.log(resposta)
                    newData.coordenadas_geograficas = JSON.stringify(resposta)                                  
                }  
    
                const newDestino = await destino.update(newData, {where:{id:id}})

                newDestino.coordenadas_geograficas = JSON.parse(newDestino.coordenadas_geograficas) //Converte um json recebido como string em um objeto javascript
                res.status(200).json(newDestino)  
                
            } catch (error){
                console.log(error.message)
                if (error.message.includes('CEP'))
                    return res.status(400).json({message: error.message})
            }           
    }
       

    async deletar(req,res) {
        /*  
            #swagger.tags = ['Destino'],
            #swagger.summary = 'Deletar um destino do usuario activo'
        */
        const { id } = req.params

        const destino = await Destino.findOne({
            where: {usuario_id:req.payload.sub, id:id},     //Somente o proprietário do destino pode excluir seus propios destinos
        })
        if(!destino){
            return res.status(404).json({message: 'Destino não encontrado'})
        }

        destino.destroy({
            where: {
            id:id
            }
        })

        return res.status(204).json({})
    }


}

module.exports = new DestinoController()