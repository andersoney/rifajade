const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./index.js");

class Customer extends Model { }

Customer.init({
    // identificador
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // nome do usuario
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // telefone do usuario
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Custumer' // We need to choose the model name
});
Customer.sync({})

module.exports = Customer;