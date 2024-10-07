const { Router, query } = require('express') 
const UsuarioController = require('../controllers/UsuarioController')
const { auth } = require('../middleware/auth')
const { validarAdicionarUsuario } = require('../middleware/validator')


const usuarioRoutes = new Router()

usuarioRoutes.post('/', validarAdicionarUsuario, UsuarioController.cadastrar)
usuarioRoutes.get('/', UsuarioController.listar)
usuarioRoutes.put('/:id', auth, validarAdicionarUsuario, UsuarioController.atualizar)
usuarioRoutes.delete('/:id', auth, UsuarioController.deletar)
usuarioRoutes.get('/:id', UsuarioController.listarUm)

module.exports = usuarioRoutes
