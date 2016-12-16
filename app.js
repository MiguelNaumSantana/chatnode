/*importar as configs do servidor */
var app = require('./config/server');
/* definir a porta de escuta do servidor*/
var server = app.listen(8080,function(){
    console.log('Servidor On');
})

var io = require('socket.io').listen(server);
/*variavel criada dentro do objeto do express para acesso no controller.js*/
app.set('io',io);

/* criar a conexão por websocket*/
io.on('connection',function(socket){
    console.log('usuario conectou');
    
    socket.on('disconnect',function(){
        console.log('usuario saiu');
    });
    
    socket.on('msgParaServidor',function(data){
    /*dialogp*/
      socket.emit('msgParaCliente',{apelido: data.apelido, mensagem:data.mensagem});  
      socket.broadcast.emit('msgParaCliente',{apelido: data.apelido, mensagem:data.mensagem});  
      /*participantes */
      socket.emit('participantesParaClientes',{apelido: data.apelido});  
      socket.broadcast.emit('participantesParaClientes',{apelido: data.apelido});
      
    });
    
    
     
    
    
    
});
