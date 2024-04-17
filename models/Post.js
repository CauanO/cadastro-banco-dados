const { type } = require('os');
var db = require('./db');

var Post = db.sequelize.define('funcionarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    } 
})

module.exports = Post

// Post.sync({force: true})