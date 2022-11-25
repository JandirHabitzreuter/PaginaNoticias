var express = require('express');
var app = express();

//Informando ao express que o EJS será o motor de views 
app.set('view engine', 'ejs');

// através do EJS é possivel renderizar os arquivos HTML
app.get('/', function(req, res){
    res.render("secao/index");
});

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
});

app.get('/beleza', function(req, res){
    res.render("secao/beleza");
});

app.get('/moda', function(req, res){
    res.render("secao/moda");
});

app.listen(3000, function(){
    console.log('Server up....');

});



