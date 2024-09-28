# Viagem365

Viagem 365 é uma API que permite administrar destinos de viajem para seus usuarios registrados.

![alt text](<Diagrama entidad-relação.png>)

## Tecnologias usadas

- Express: Framework, servidor da aplicação web JS
- Node js:  Ambiente de execução do código JavaScript do lado servidor
- Sequelize: é um ORM (Object-Relational Mapper) para Node js
- Postgress: Banco de dados relacional 
- Jsonwebtoken: Token
- Bcryptjs: Encriptação de senha
- Yup: Validador de dados
- Swagger: documentação da API


## Rodar a aplicação:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install`
2. Se for em ambiente local: `npm install --dev`
3. `cp .env_example .env` Atualizar as variáveis se for necessário.

### Rodar as migrations. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Executar seeders para carregar valores inicias no banco de dados
1. `sequelize db:seed:all`
2. `npx sequelize db:seed:all`

### Para rodar o repositório em ambiente local
1. `npm run start:dev`

### Documentaçao da API

Acesse ao link `http://localhost:3000/docs/` para observar as rotas diponivéis.
Também pode importar a coleção de postman para executar a aplicação.

### Usando a API

1. Cadastar um novo usuario e fazer login, ou fazer um login de algum usuario do seeder.
2. Copiar o token gerado y colar na enviroment "Token_Viagem365".
3. Cadastrar um destino.
4. Agora pode listar os destinos associados ao usuario, atualizar ou deletar algum pelo ID.

##  Melhorias que podem ser aplicadas

Podería ser aplicado uma validação em atulizar(usuarios/:id) e deletar(usuarios/:id), para que só o usuario logado
execute essas funçoes.


### Video explicativo

`https://drive.google.com/file/d/1oI3rGbyyz7q3XMkpTgbWG5OnS1oaaKiV/view?usp=drive_link`




