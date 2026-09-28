const router = require('express').Router();
const userController = require('../controllers/userController');
const { registerValidator, loginValidator } = require('../helpers/userValidator');
const handleValidation = require('../Middlewares/handleValidation');

router.post('/register', registerValidator(), handleValidation, userController.register);
router.post('/login', loginValidator(), handleValidation, userController.login);


module.exports = router;
