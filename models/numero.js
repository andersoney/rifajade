const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./index.js");
const Raffle = require('./rifa.js');

class Number extends Model { }

Number.init({
    // identificador
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // identificação da rifa
    idRaffle: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // numeros da rifa
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // informação do pagamento
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Number' // We need to choose the model name
});
Number.sync({  })

module.exports = Number;