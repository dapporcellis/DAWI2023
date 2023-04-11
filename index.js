const express = require('express');
const app = express();

app.get('/',function(req,res){
    if(typeof req.query.nome != 'undefined'){
        res.send("Oi "+req.query.nome)
    }else{
        res.send("Oi Mundo!")
    }
})

app.get('/bbb', function(req,res){
    res.send('Site do BBB')
})

app.get('/:nome', function(req,res){
    res.send('Oi '+req.params.nome)
})

app.get('/:nome/:sobrenome', function(req,res){
    res.send('Oi '+req.params.nome+" "+req.params.sobrenome)
})

app.listen('3000', function(){
    console.log('Servidor funcionando!')
})