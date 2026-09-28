const bcrypt = require('bcrypt');
const user = require('../models/user');
const createUserToken = require('../helpers/create-user-token');

const register = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const userExists = await User.findOne({ where: {email} });
        
        if (userExists) {
            return res.status(422).json({message: 'Email já cadastrado!'});
        }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    await createUserToken(req, res, next);
    
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o usuário', error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne

        if(!user){
            return res.status(404).json({message: 'Usuário não encontrado!'});
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) {
            return res.status(422).json({ message: 'Senha incorreta!'});
        };

        await createUserToken(user, req, res);

    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
    }
};

module.exports = {register, login};
