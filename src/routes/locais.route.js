const { Router, query } = require('express') 
const LocalController = require('../controllers/LocalController')
const { auth } = require('../middleware/auth')
const { validarAdicionarLocal } = require('../middleware/validator')


const localRoutes = new Router()

localRoutes.get('/', LocalController.listar)
localRoutes.get('/:id', LocalController.listarUm)
localRoutes.post('/', auth, validarAdicionarLocal, LocalController.cadastrar)
localRoutes.put('/:id', auth, validarAdicionarLocal, LocalController.atualizar)
localRoutes.delete('/:id', auth, LocalController.deletar)


module.exports = localRoutes