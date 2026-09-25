const {body} = require('express-validator');

const registerValidator = () => [
    body('name')
        .isString()
        .withMessage('O nome é obrigatório')
        .isLength({min: 3})
        .withMessage('O nome precisa ter no mínimo 3 caracteres'),
    body('email')
        .isEmail()
        .withMessage('Insira um email válido')
        .normalizeEmail,
    body('passoword')
        .isString()
        .isLength({min: 7})
        .withMessage('A senha precisa ter no mínimo 7 caracteres')
];

const loginValidator = () => [
    body('email').isEmail.withMessage('Insira um email válido!'),
    body('password').notEmpty().withMessage('A senha é obrigatória!'),
];

module.exports = {registerValidator, loginValidator};
