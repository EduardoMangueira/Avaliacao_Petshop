const jwt = require('jsonwebtoken');
require ('dotenv').config();

const createUserToken = (user, req, res) => {
    const token = jwt.sign(
        {id: user.id, name: user.name}, process.env.JWT_SECRET, {expiresIn: '7d'}
    );

    res.status(200).json({
        message: 'Você está autenticado!',
        token,
        userId: user.id,
    });
};

module.exports = createUserToken;
