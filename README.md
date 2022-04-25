# API Teste Backend BeMobile

## Nesse teste tinha como objetivo:

* Estruturar uma API RESTful e um banco de dados ligado a esta API. Trate-se de um sistema que permite cadastrar usuários externamente e, ao realizarem login, poderão registrar clientes, produtos e vendas. O(a) candidato(a) poderá escolher desenvolver em Node.js (Adonis, Koa ou Express) ou PHP (Laravel).

## Etapas concluídas

### TABLES

- USUARIO:
    - [x]  ID
    - [x]  E-mail
    - [x]  Senha

- CLIENTES:
    - [x]  ID
    - [x]  Nome
    - [x]  CPF
    - [x]  Endereço (completo)
    - [x]  Telefone
- PRODUTOS:
    - [x]  ID
    - [x]  TIPO
    - [x]  MARCA
    - [x]  MODELO
    - [x]  PREÇO
- VENDAS:
    - [x]  ID
    - [x]  Cliente
    - [x]  Produto
    - [x]  Quantidade
    - [x]  Data e Hora

### ROTAS

- [x]  SIGNUP
- [x]  LISTA CLIENTES (PRINCIPAIS INFOS, ORDER BY ID)
- [x]  DETALHE CLIENTE (SHOW)
- [x]  ADICIONAR CLIENTE
- [x]  EDITAR CLIENTE
- [x]  DELETAR CLIENTE
- [x]  LISTAR PRODUTOS (PRINCIPAIS INFOS, ORDER A-Z)
- [x]  DETALHES PRODUTO (SHOW)
- [x]  ADICIONAR PRODUTO
- [x]  EDITAR PRODUTO
- [x]  DELETAR PRODUTO
- [x]  REGISTRAR A VENDA DE 1 PRODUTO A 1 CLIENTE (store)

## ETAPAS NÃO CONCLUÍDAS 

- [ ]  LOGIN

- VENDAS:
    - [ ]  PREÇO TOTAL

## MOTIVOS DA NÃO CONCLUSÃO

- LOGIN // LOGOUT: Como conversado na entrevista, estou desenvolvendo minhas habilidades, precisei estudar bastante antes de começar a desenvolver essa API, principalmente relacionado a ligação entre tabelas, consegui efetuar essas ligações com sucesso, iniciei o processo de autenticação do login, porém, apresentou erro e infelizmente o prazo estava se encerrando, foquei em melhorar o código como um todo e estudar para desenvolver melhor o JWT o mais rápido possível.

- PREÇO TOTAL: Por ser uma das últimas etapas do desenvolvimento da API, o prazo ficou próximo de encerrar e encontrei dificuldades em encontrar uma lógica para utilizar, será também alvo de estudos no futuro.

## MÓDULOS UTILIZADOS

- Javascript
- Node.JS
- EXPRESS
- CSS
- NODEMON
- MYSQL2
- DOTENV
- NODEMON
- JS
- jsonwebtoken
- sequelize
- ejs

## ENTENDENDO AS PASTAS UTILIZADAS

### public

- Aqui se encontram ferramentas que são utilizadas para estilização e scripts de desenvolvimento.

### src

- Toda lógica, rotas, controllers e ligação com o banco de dados se encontram nesta pasta contendo:

#### controller / dados.controller.js

- Aqui é onde são feitas as requisições e repassadas as respostas para as rotas.

#### database / db.js

- Responsável pela conexão entre o banco de dados e o código.

#### model / dados.js

- Coleta toda informação necessária para requisição do código e resposta ao banco de dados.

#### routes / routes.js

- Todas as rotas e metodos se encontram aqui

### views

- Arquivos .ejs responsáveis por toda a parte visual do sistema.

## Informações importantes

#### dotenv

DB_USER=root
DB_PASS=Admin1234
DB_BASE=mydb
DB_HOST=127.0.0.1
DB_PORT=3306
SECRET=bemobile

#### gitignore

node_modules
.env

#### Tables do servidor

- Estão anexadas ao "public/img" imagens demonstrando como se encontram as tables em meu banco de dados.


