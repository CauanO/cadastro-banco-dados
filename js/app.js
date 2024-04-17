// Chamada do express
var express = require('express');
var app = express();
// Chamada do express-handlebars
var {engine} = require('express-handlebars');
// Chamada do body-parser
var bodyParser = require('body-parser');
// Chamada do module Posts
var Post = require('../models/Post');
const { where } = require('sequelize');

// Configuração do handlebars | Atualização do "each" no arquivo de dados
app.engine('handlebars', engine({
    defaultLayout: 'main', runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rota principal
app.get('/', function(req, res){
    res.render('home');
})
// Rota do sobre
app.get('/sobre', function(req, res){
    res.render('sobre');
})
// Rota do contato
app.get('/contato', function(req, res){
    res.render('contato');
})
// Rota do cadastro
app.get('/cadastro', function(req, res){
    res.render('cadastro');
})
// Rota de dados dos fucionários | {order: [['id', 'DESC']]} = está definindo a ordem dos dados apresentados
app.get('/dados', function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('dados', {posts: posts})
    })
})
// Rota para receber o formulario
app.post('/add', function(req, res){
    Post.create({
        nome: req.body.username,
        email: req.body.email,
        senha: req.body.password
    }).then(function(){
        res.redirect('/dados')
    }).catch(function(erro){
        res.send("Hover um error" + erro)
    })
})

// Servidor
app.listen(8081, function() {
    console.log("Servidor ON!")
})