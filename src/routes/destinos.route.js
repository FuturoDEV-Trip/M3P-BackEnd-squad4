const { Router, query } = require('express') 
const DestinoController = require('../controllers/DestinoController')
const { auth } = require('../middleware/auth')
const { validarAdicionarDestino } = require('../middleware/validator')


const destinoRoutes = new Router()

destinoRoutes.post('/', auth, validarAdicionarDestino, DestinoController.cadastrar)
destinoRoutes.get('/', auth, DestinoController.listar)
destinoRoutes.get('/:id', auth, DestinoController.listarUm)
destinoRoutes.put('/:id', auth, validarAdicionarDestino, DestinoController.atualizar)
destinoRoutes.delete('/:id', auth, DestinoController.deletar)

module.exports = destinoRoutes