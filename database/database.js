const Sequelize = require("sequelize");
const conn = new Sequelize('db_games', 'root', 'database1234',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});



module.exports = conn;