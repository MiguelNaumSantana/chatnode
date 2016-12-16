/* importar o modulo do framework express*/
var express = require('express');
/* importar o modulo consign*/
var consign = require('consign');
/* importar o modulo body-parser*/
var bodyParser =  require('body-parser');
/* importar o express validator*/
var expressValidator = require('express-validator');
/* inciar o express */
var app = express();
/*setar as variavies 'view engine' e 'views' do express*/
app.set('view engine','ejs');
app.set('views','./app/views');

/* configurar o middleware express-static para procurar os arquivos estaticos*/
app.use(express.static('./app/public'));

/*configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended : true}));

/*configurar o middleware express-validator */
app.use(expressValidator());

/*autoload rotas,modelos e controles para o objeto app  */
consign()
    .include('app/routes')
    .then('app/controllers')
    .then('app/models')
    .into(app);

/*exportar a variavel app para o app.js*/
module.exports = app;