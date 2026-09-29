# API Pet Shop - Estudo de Caso — P1: Apresentação de Solução de Problema Real  

## Integrantes  
- Nome: Luís Felipe Coelho   
- RA: 25001003  
- Nome: Pollyana Caso  
- RA: 25001334  
- Nome: Eduardo Mangueira de Castro Moraes  
- RA: 25001267

## Sobre o Projeto
Este projeto foi desenvolvido como uma solução para um sistema de Pet Shop, com o objetivo de facilitar o
cadastro de usuários e o agendamento de serviços para animais.
A aplicação foi desenvolvida utilizando Node.js e Express, com integração ao banco de dados MySQL através do
Sequelize. Também foram utilizados JWT, bcrypt e express-validator para autenticação, segurança e validação
dos dados.

## Problema
Em um Pet Shop, o controle de clientes e agendamentos pode ser dificultado quando essas informações não
possuem uma organização adequada.
Pensando nisso, o projeto propõe uma API para realizar o cadastro e login dos usuários e permitir que usuários
autenticados realizem agendamentos de serviços para seus pets.

## Objetivo
Desenvolver uma API REST aplicando os principais conceitos trabalhados na disciplina:
- Node.js e Express;    
- MySQL e Sequelize;
- Arquitetura com routes, controllers, models e middlewares;
- Autenticação com JWT;  
- Criptografia de senhas com bcrypt;  
- Validação e sanitização com express-validator.

## Tecnologias Utilizadas
- Node.js  
- Express  
- MySQL  
- Sequelize  
- JSON Web Token (JWT)  
- bcrypt  
- express-validator  
- dotenv  
- Insomnia  

## Estrutura do Projeto

```text
projeto/
├── src/
│   ├── Middlewares/
│   │   ├── handleValidation.js
│   │   └── verifyToken.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── db/
│   │   └── conn.js
│   │
│   ├── helpers/
│   │   ├── create-user-token.js
│   │   └── userValidator.js
│   │
│   ├── models/
│   │   ├── Appointment.js
│   │   └── user.js
│   │
│   └── routes/
│       ├── appointmentRoutes.js
│       └── userRoutes.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## Banco de Dados
O banco de dados utilizado é o MySQL, com acesso realizado através do Sequelize.  

### User
Representa os usuários cadastrados.
- `id`  
- `name`  
- `email`  
- `password`

O campo `email` é único.

### Appointment
Representa os agendamentos.
- `id`    
- `petName`  
- `service`  
- `date`  
- `userId`

Um usuário pode possuir vários agendamentos e cada agendamento pertence a um usuário.

## Cadastro e Login
O cadastro utiliza validação dos dados e protege a senha antes de armazená-la no banco.

### Cadastro
```http
POST /auth/register
```
```json
{
"name": "João",
"email": "joao@email.com",
"password": "1234567"
}
```  

### Login
```http
POST /auth/login
```
```json
{
"email": "joao@email.com",
"password": "1234567"
}
```
Após o login, a API gera um token JWT para autenticar o usuário.

## Segurança  

### JWT
O middleware `verifyToken` verifica se a requisição possui um token JWT válido.
O token deve ser enviado no cabeçalho:
```http
Authorization: Bearer SEU_TOKEN
```
Sem um token válido, a rota protegida não pode ser acessada.  

### bcrypt
O bcrypt é utilizado para proteger as senhas dos usuários.
Durante o cadastro:
```javascript
const salt = await bcrypt.genSalt(12);  
const hashPassword = await bcrypt.hash(password, salt);  
```
No login, o sistema compara a senha informada com o hash armazenado.

## Validação
O projeto utiliza `express-validator` para validar os dados recebidos nas requisições.
No cadastro são verificados, por exemplo:  
- Nome com pelo menos 3 caracteres;  
- E-mail válido;  
- Senha com pelo menos 7 caracteres.

Os erros de validação são tratados pelo middleware `handleValidation`.

## Agendamento
Usuários autenticados podem realizar agendamentos através da rota protegida:
```http
POST /appointment
```
Exemplo:
```json
{
"petName": "Thor",
"service": "Banho",
"date": "2026-09-30"
}
```
A rota utiliza o middleware `verifyToken`, garantindo que somente usuários autenticados possam acessá-la.

## Principais Rotas  

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| GET | `/` | Verifica se a API está funcionando | Não |
| POST | `/auth/register` | Cadastra um usuário | Não |
| POST | `/auth/login` | Realiza o login | Não |
| POST | `/appointment` | Realiza um agendamento | Sim |

## Como Executar

### 1. Instalar as dependências
```bash
npm install
```

### 2. Configurar o banco
Configure o arquivo `.env` com os dados do MySQL e a chave do JWT:
```env
DB_NAME=nome_do_banco
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=sua_chave_secreta
```

### 3. Iniciar o projeto
```bash
node app.js
```
Ou, utilizando o nodemon:
```bash
npx nodemon app.js
```
A API utiliza a porta `3000` como padrão.

## Conclusão
Com este projeto, conseguimos aplicar na prática conceitos que foram aprendidos em aula, como o desenvolvimento de APIs com Node.js e Express,
integração com MySQL através do Sequelize, organização em MVC, autenticação com JWT, criptografia com bcrypt e
validação de requisições. O desenvolvimento também permitiu testar as rotas no Insomnia e entender melhor como essas tecnologias podem
trabalhar juntas em uma aplicação
