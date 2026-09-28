const router = require('express').Router();
const verifyToken = require('../Middlewares/verifyToken');
const Appointment = require('../models/Appointment');

router.post('/', verifyToken, (req, res) => {
    res.status(201).json({
        message: 'Agendamento realizado com sucesso!',
        Appointment: req.body   
    });
});

module.exports = router;