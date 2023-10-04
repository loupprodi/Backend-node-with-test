#RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que ja ocorreram;
- [x] O usuário deve poder visualizar uma transação unica;

#RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá;
- [X] Deve ser possivel identificarmos o usuário entre as requisições;
- [X] O usuário so pode visualizar transações o qual ele criou;


## Sobre o projeto

Este projeto foi desenvolvido com finalidade didaticas criando back-end em node usando o framework fastify, foi elaborado rotas simples usando zod schema para validar e tipar os dados juntamente com o typescript.

### Features

- [x] Adicionado o zod
- [x] Adicionado o knex

## Pré-requisitos

- Qualquer IDE capaz de rodar aplicativo em NodeJS
  - [visual studio code](https://code.visualstudio.com/)
  Comandos:

 npm i -D typescript  
 npm install -D @types/node  
 npx tsc --init  
 npm install tsx -D  
 npm i dotenv  
 npm i zod  
 npm i @fastify/cookie  
  
  Obs: Em caso de duvida veja o script no package.json
  Para rodar uma application Node: npx tsx src/server.ts  
  Para transformar um arquivo .ts em .js: npx tsc src/server.ts

  
  caso queira fazer por si mesmo e adicione as dependencias:
##Bibliotecas usadas:
- [Learn knexJs](https://knexjs.org/) - SQL query builder.

    **para criar uma migration:** npm run knex -- migrate:make add-session-id-to-transactions
    **para rodar a migration:** npm run knex --migrate:latest
    **para rodar o comando de exclusão dos campos na tabela:** npm run knex -- migrate:rollback

##Bibliotecas de testes:
- [jestJs](https://jestjs.io/pt-BR/) poderoso framework de testes em javascript
- [vitest](https://vitest.dev/)Vitest is a next generation testing framework powered by Vite.
- [supertest](https://www.npmjs.com/package/supertest) SuperTest as an npm module
- [tsup](https://tsup.egoist.dev/#bundle-files) Bundle your TypeScript library with no config, powered by esbuild.
  
npm i vitest -D
 **executar testes:** npx vitest
npm i supertest -D  
npm i -D @types/supertest  
npm i tsup -D  

## Tecnologias utilizada

### Back-end

-Biblioteca  NodeJs
-Typescript | Javscript

### Desenvolvido por

Luiz Prosdoskimi
