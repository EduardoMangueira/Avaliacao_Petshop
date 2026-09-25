const Sequelize = require('sequelize');
require('dotenv').config();

//parametros de conexão
const conn = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,{
        host:process.env.DB_HOST,
        dialect:'mysql',
        port:process.env.DB_PORT,
    }
)

try {
    conn.authenticate()
    console.info('Banco de Dados foi conectado com sucesso!')
} catch (error) {
    console.info(`Não foi possivel conectar ao banco, erro:,${error}`)
}

module.exports = conn