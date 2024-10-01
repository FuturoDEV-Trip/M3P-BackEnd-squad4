//criado para compor a dashboard e permitir acesso a todos os lugares ***

const { Router, query } = require('express') 
const LocalController = require('../controllers/LocalController')


const localRoutes = new Router()

localRoutes.get('/', LocalController.listar)
localRoutes.get('/:id', LocalController.listarUm)


module.exports = localRoutes