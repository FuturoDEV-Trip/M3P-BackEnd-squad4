const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./database/connection') // Configuração de acesso ao banco de dados
const routes = require('./routes/routes')

const PORT_API = process.env.PORT_API || 3000 // Porta do servidor

class Server {

  constructor(server = express())// Argumento do constructor auto iniciado da aplicação para usarmos as devidas funções do express
  {
    this.middlewares(server) // Instância do argumento da função para a função middlewares
    this.database()  // Instância da função database
    server.use(routes)
    this.initializeServer(server) // Instância da função initializeServer
  }

  async middlewares(app) {
    app.use(cors()) // Utilização da função cors dentro do servidor
    app.use(express.json()) // Habilitar entrada de dados como json no servidor
  }

  async database(maxRetries = 5) {
    let retries = 0;

    while (retries < maxRetries) {
      try {
        await connection.authenticate(); // Intento de conexión a la base de datos
        console.log('Conexão bem sucedida!');
        break; // Si la conexión es exitosa, rompe el bucle
      } catch (error) {
        retries++;
        console.error(`Tentativa ${retries}: Não foi possível conectar ao banco de dados.`, error);

        if (retries >= maxRetries) {
          console.error('Número máximo de tentativas alcançado. Falha ao conectar.');
          throw error; // Lanza el error después de alcanzar el número máximo de reintentos
        }

        console.log(`Reintentando em 3 segundos...`);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos antes del próximo intento
      }
    }
  }


  async initializeServer(app) {
    // Valor da porta do servidor
    app.listen(PORT_API, () => console.log(`Servidor executando na porta ${PORT_API}`)) // Execução do servidor
  }
}

module.exports = { Server } // Exportação da Classe Server