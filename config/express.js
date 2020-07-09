//importa a biblioteca express-load
var load = require('express-load');
//importa a biblioteca body-parse
var bodyParser = require('body-parser');
//importa a biblioteca cors
var cors = require('cors');
//importa a biblioteca express
var express = require('express');

//padrão de projeto factory
module.exports = function() {
    //instancia a biblioteca expresse dentro do projeto
    var app = express();
    //a constante port vai ter valor 3000, o porjeto vai rodar na porta 3000
    app.set('port', 3000);
    //define o uso do body-parse com URLENCODE - para poder fazer o CRUD
    app.use(bodyParser.urlencoded({
       extended: true
    }));
    //Adciona JSON ao body parser
    app.use(bodyParser.json());
    //Adiciona o method-Override
    app.use(require('method-override')());
	
	//enables cors
	app.use(cors({
	  'allowedHeaders': ['sessionId', 'Content-Type'],
	  'exposedHeaders': ['sessionId'],
	  'origin': '*',
	  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	  'preflightContinue': false
	}));
		
    load('models',{
        cwd: 'app'
    }).then('controllers').then('routes').into(app);
    return app;
};