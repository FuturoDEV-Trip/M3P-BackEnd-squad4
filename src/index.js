const { Server } = require('./server')
require('dotenv').config() // Carrega as variáveis de ambiente do arquivo .env

new Server() // Instanciação da classe Server para executar o servidor