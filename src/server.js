const express = require('express') 
const cors = require('cors') 
const { connection } = require('./database/connection')
const routes = require('./routes/routes')

const PORT_API = process.env.PORT_API || 3000 // Porta do servidor

class Server {

  constructor(server = express())
  {
    this.middlewares(server) 
    this.database() 
    server.use(routes)
    this.initializeServer(server)
  }

  async middlewares(app) {
    app.use(cors()) 
    app.use(express.json()) 
  }

  async database(maxRetries = 5) {
    let retries = 0;

    while (retries < maxRetries) {
      try {
        await connection.authenticate(); 
        console.log('Conexão bem sucedida!');
        break; 
      } catch (error) {
        retries++;
        console.error(`Tentativa ${retries}: Não foi possível conectar ao banco de dados.`, error);

        if (retries >= maxRetries) {
          console.error('Número máximo de tentativas alcançado. Falha ao conectar.');
          throw error;
        }

        console.log(`Reintentando em 3 segundos...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
  }


  async initializeServer(app) {
 
    app.listen(PORT_API, () => console.log(`Servidor executando na porta ${PORT_API}`)) 
  }
}

module.exports = { Server } 