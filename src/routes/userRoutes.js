const router = require('express').Router();
const userController = require('../controllers/userController');
const { registerValidation, loginValidation } = require('../helpers/userValidator');
const handleValidation = require('../Middlewares/handleValidation');

router.post('/register', registerValidation(), handleValidation, userController.register);
router.post('/login', loginValidation(), handleValidation, userController.login);

module.exports = router;
