# Social Media API - WIP
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-00ADD8?style=for-the-badge&logo=auth0&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-007ACC?style=for-the-badge&logo=auth0&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=gmail&logoColor=white)
![Helmet](https://img.shields.io/badge/Helmet-000000?style=for-the-badge&logo=helmet&logoColor=white)
![Cors](https://img.shields.io/badge/Cors-000000?style=for-the-badge&logo=cors&logoColor=white)

Este é um projeto de estudo voltado para a implementação de autenticação JWT e uso de bancos de dados não relacionais como o MongoDB. A API permite o cadastro, login e logout de usuários, além de funcionalidades relacionadas a postagens.

Progresso do Projeto

Configuração do Projeto
- [x] Configuração inicial do projeto com Node.js, Express.js e TypeScript.
- [x]  Configuração do TypeScript (tsconfig.json).
- [x]  Configuração do ambiente de desenvolvimento (.env).

Implementação do JWT
- [x]  Configuração do JWT para autenticação.
- [x]  Criação de middleware para verificação de tokens JWT.
- [x] Geração de tokens JWT durante o login.

Desenvolvimento dos Endpoints
Autenticação:
- [x]  Implementação dos endpoints de cadastro (/api/auth/signup), login (/api/auth/signin) e logout (/api/auth/signout).

Postagens:
- [x] Implementação do endpoint de criação de postagens (/api/posts).
      
Models

User Model:
- [x] Definição do modelo de usuário com Mongoose.
Campos: email, password, createdAt, updatedAt.

Post Model:
- [ ] Definição do modelo de postagem com Mongoose.
Campos: title, description, author, createdAt, updatedAt.

Rotas
- [x] Definição das rotas de autenticação em authRouter.ts.
- [ ] Definição das rotas de postagens em postsRouter.ts.

Postagens

- [ ] Implementação da lógica de criação de postagens.
- [ ] Validação dos dados de entrada para postagens.
- [ ] Associação de postagens com usuários autenticados.

## Endpoints

### Autenticação

- **POST /api/auth/signup**
  - Descrição: Cadastro de um novo usuário.
  - Corpo da Requisição:
    ```json
    {
      "email": "exemplo@gmail.com",
      "password": "ExemploSenha123!"
    }
    ```
  - Respostas:
    - 201: Usuário criado com sucesso.
    - 401: Erro de validação ou usuário já existe.

- **POST /api/auth/signin**
  - Descrição: Login de um usuário.
  - Corpo da Requisição:
    ```json
    {
      "email": "exemplo@gmail.com",
      "password": "ExemploSenha123!"
    }
    ```
  - Respostas:
    - 200: Login bem-sucedido.
    - 401: Credenciais inválidas ou usuário não existe.

- **POST /api/auth/signout**
  - Descrição: Logout de um usuário.
  - Respostas:
    - 200: Logout bem-sucedido.

### Postagens
 - WIP

## Estrutura do Projeto

- **src/controllers**: Contém os controladores que lidam com a lógica de negócios.
- **src/middlewares**: Contém middlewares para validação, envio de emails, etc.
- **src/models**: Contém os modelos Mongoose para as coleções do MongoDB.
- **src/routers**: Contém os roteadores que definem os endpoints da API.
- **src/utils**: Contém utilitários como funções de hashing.

## Configuração

1. Clone o repositório:
   
   ```sh
   git clone https://github.com/seu-usuario/socialmediaapi.git
   ```
   
3. Instale as dependências:
   
    ```sh
    npm install
    ```
    
5. Configure as variáveis de ambiente no arquivo .env:
   
    ```sh
    PORT=8000
    MONGO_URI=sua-uri-do-mongodb
    JWT_TOKEN_SECRET=sua-chave-secreta
    NODE_CODE_SENDING_EMAIL=seu-email@gmail.com
    NODE_CODE_SENDING_EMAIL_PASSWORD=sua-senha
    ```
    
7. Inicie o servidor:
   
    ```sh
    npm run dev
    ou
    npm run watch (para monitorar alterações no código e atualizar o projeto)
    ```
