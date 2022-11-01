const Sequelize  = require("sequelize");
const Sequelie = require("sequelize");
const connection = require("../database/database");

const Game = connection.define('games', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },year: {
        type: Sequelize.INTEGER,

    }
});
//Create table first time
// Game.sync({force:false}).then(() => {console.log('Tabela criada!')});
module.exports = Game;