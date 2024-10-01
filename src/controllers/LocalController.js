const Destino = require('../models/Destino')
const { getCepCoordinates } = require('../service/map.service')

class LocalController {

 async listar(req, res) {
        /*  
            #swagger.tags = ['Local'],
            #swagger.summary = 'Listar os locais existentes'
            
        */
        try {
            const locais = await Destino.findAll()
            // locais.forEach(local => {
            //     local.coordenadas_geograficas = JSON.parse(local.coordenadas_geograficas)   //Converte um json recebido como string em um objeto javascript
            // })
                
            res.json(locais)
        } catch (error) {
            res.status(500).json({message: 'Não foi possível listar os locais' })
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
            required: true
        */
            const { id } = req.params
            const local = await Destino.findByPk(id)
            if (!local) {
                return res.status(404).json({ message: "Local não encontrado!" })
            }
            // local.coordenadas_geograficas = JSON.parse(local.coordenadas_geograficas)   //Converte um json recebido como string em um objeto javascript
         res.status(200).json(local)           

        } catch (error) {
            console.error(`Erro ao buscar local: ${error}`);
            return res.status(500).json({ error: 'Erro interno do servidor' });
          }
        }

 

}

module.exports = new LocalController()