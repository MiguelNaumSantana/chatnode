/* funcao que será exportada no require desse modulo */
module.exports.home = function(application,req,res){
     res.render('index',{validacao : {}} );
    
}