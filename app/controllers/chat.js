/* funcao que será exportada no require desse modulo */
module.exports.iniciarChat =  function(application,req,res){
     var dadosForm = req.body;
     
     req.assert('apelido','Nome ou apelido é obrigatorio').notEmpty();
     req.assert('apelido','Nome ou apelido deve conter entre 3 e 15 caracteres').len(3,15);
     
     var erros = req.validationErrors();
     /* usar o return para o res.sent parar a aplicação caso haja erros */
     if(erros){
         //res.send('Exitem erros');
         res.render('index',{validacao : erros});
         return;
     }
     
     application.get('io').emit('msgParaCliente',{apelido: dadosForm.apelido,mensagem:'acabou de entrar no chat'})
     
     console.log(dadosForm);
     res.render('chat',{dadosForm:dadosForm});
}