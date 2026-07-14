# API CRUD de Usuários
## Sobre o projeto

Este projeto consiste em uma API REST desenvolvida com o objetivo de praticar conceitos de desenvolvimento backend utilizando o ecossistema Node.js.

A aplicação implementa um CRUD (Create, Read, Update e Delete) de usuários, permitindo realizar operações de cadastro, consulta, atualização e remoção de registros armazenados em um banco de dados MongoDB.

Além das operações básicas, o projeto serve como ambiente de estudo para arquitetura de APIs, organização de rotas, integração com banco de dados e utilização de ORM para abstrair o acesso ao banco de dados, oferecendo uma API mais intuitiva para realizar as operações de leitura e escrita, além de facilitar a manutenção e portabilidade da aplicação em diferentes bancos de dados.

## Tecnologias utilizadas
- Node.js
- Express
- MongoDB Atlas
- Prisma ORM

## Funcionalidades
- Criar um usuário
- Listar todos os usuários
- Buscar um usuário por ID
- Atualizar um usuário
- Remover um usuário

## Como executar o projeto
### Clone o repositório
git clone API_01

### Instale as dependências
npm install

### Configure as variáveis de ambiente
Renomeie o arquivo .env.example para .env e substitua os valores pelos dados da sua conexão com o MongoDB Atlas:
DATABASE_URL="sua_string_de_conexao"

### Gere o Prisma Client
npx prisma generate

### Sincronize o schema com o banco de dados
npx prisma db push

### Execute a aplicação
npm run dev

A API ficará disponível em:
http://localhost:3000

Ou na porta definida na variável PORT no arquivo .env

## Objetivo
Este projeto foi desenvolvido como parte dos meus estudos em desenvolvimento backend, com foco na construção de APIs REST utilizando Node.js, Express, Prisma e MongoDB.
