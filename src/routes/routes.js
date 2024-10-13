const { Router } = require('express')
const usuarioRoutes = require("./usuarios.route")
const localRoutes = require("./locais.route")
const loginRoutes = require("./login.route")
const dashboardRoutes = require("./dashboard.route")


const routes = Router()

// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
routes.use('/usuarios', usuarioRoutes)
routes.use('/locais', localRoutes)
routes.use('/login', loginRoutes)
routes.use('/dashboard', dashboardRoutes)

module.exports = routes