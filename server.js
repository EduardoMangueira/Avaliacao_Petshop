require('dotenv').config();
const express = require('express');
const sequelize = require('./src/db/conn');

require('./src/models/user');
require('./src/models/Appointment');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API Petshop funcionando!'}));

const PORT = process.env.PORT || 3000;

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    })
    .catch((err) => console.error('Erro ao conectar ao banco', err));


