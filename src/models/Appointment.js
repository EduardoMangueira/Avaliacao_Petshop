const {DataTypes} = require('sequelize');
const sequelize = require('../db/conn');
const User = require('./user');

const Appointment = sequelize.define('Appointment', {
    petName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    service: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

User.hasMany(Appointment, { foreignKey: 'userId'});
Appointment.belongsTo(User, { foreignKey: 'userId'});

module.exports = Appointment;