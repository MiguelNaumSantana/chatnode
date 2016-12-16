module.exports = function(application){
    application.get('/',function(req,res){
       /* navegar ate o controller index.js para executar a funcao */
       application.app.controllers.index.home(application,req,res);
    })
    
}