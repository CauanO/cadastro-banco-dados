var Sequelize = require("sequelize");

// Conexão com o Banco de dados
var sequelize = new Sequelize('supermercado', 'root', 'YOUR_KEY', {
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}