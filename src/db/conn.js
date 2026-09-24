const Sequelize = require('sequelize')
require('dotenv').config();

//parametros de conexão
const conn = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS
    ,{
        host:process.env.DB_HOST,
        dialect:'mysql',
        port:3306
    }
)

module.exports = Sequelize