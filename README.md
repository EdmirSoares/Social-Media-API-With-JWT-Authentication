# Social Media API - WIP

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

## Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Joi (validação)
- Bcrypt (hashing de senhas)
- Nodemailer (envio de emails)
- Helmet (segurança)
- Cors (controle de acesso)

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
