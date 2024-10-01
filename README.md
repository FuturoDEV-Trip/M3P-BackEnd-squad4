# M3P-BackEnd-squad4

## Rodar a aplicação com docker compose:

### 1) Na primeira vez copiamos o arquivo .env:
`cp .env_example .env` Atualizar as variáveis se for necessário.

### 2) Construir imagem de docker.
`docker compose build`

### 3) Para rodar o servidor.
`docker compose up -d`

### 4) Rodar as migrations. 
`docker compose exec web npx sequelize db:migrate` 

### 5) Executar seeders para carregar valores inicias no banco de dados
`docker compose exec web npx sequelize db:seed:all`

### 6) Para parar o servidor.
`docker compose stop`


### Para testar a API - Usuários
1. Bruno - email: `bruno@email.com` ,  senha: `senha123`
2. Rebeca - email: `rebeca@email.com`, senha: `senha123`
3. Keeity -  email: `keeity@email.com`, senha: `senha123`
4. Alana - email: `alana@email.com`,senha: `senha123`
5. Ingo - email: `ingo@email.com`, senha: `senha123`

### Documentaçao da API

Acesse ao link `http://localhost:3000/docs/` para observar as rotas diponivéis.
Também pode importar a coleção de postman para executar a aplicação.