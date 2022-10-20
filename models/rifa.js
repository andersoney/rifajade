const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("./index.js");

class Raffle extends Model { }

Raffle.init({
    // identificador
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // numeros da rifa
    responsible: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsibleNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // informação do pagamento
    dateRun: {
        type: DataTypes.DATE,
        allowNull: false
    },
    winner: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Raffle' // We need to choose the model name
});
Raffle.sync({
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})
// the defined model is the class itself

module.exports = Raffle;