const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    if(typeof req.query.nome != 'undefined'){
        res.send("Oi "+req.query.nome)
    }else{
        res.render('pagina')
    }
})

app.get('/algoritmoi', function(req,res){
    res.render('disciplina')
})


app.get('/bbb', function(req,res){
    res.send('Site do BBB')
})

app.get('/saudacao', function(req, res) {
    let data = new Date();
    let horas = data.getHours();
    console.log(horas)

    if(horas>=6 && horas<12){
        res.send('Bom dia!')
    }else if(horas>=12 && horas<18){
        res.send('Boa Tarde!')
    }else{
        res.send('Boa Noite!')
    }
})

app.get('/:nome', function(req,res){
    res.send('Oi '+req.params.nome)
})

app.get('/quadrado/:numero', function(req,res){
    let numero = parseInt(req.params.numero)
    let quadrado = numero*numero
    res.send("O quadrado do numero: "+numero+" é "+quadrado)
})

app.get('/raiz/:numero', function(req,res){
    let numero = parseFloat(req.params.numero)
    let raiz = Math.sqrt(numero)
    res.send("A raiz do número: "+numero+" é "+raiz)
})

app.get('/soma/:num1/:num2',function(req,res){
    let resultado = parseInt(req.params.num1)+parseInt(req.params.num2)
    res.send(req.params.num1+" + "+req.params.num2+" = "+resultado)
})





app.get('/:nome/:sobrenome', function(req,res){
    res.send('Oi '+req.params.nome+" "+req.params.sobrenome)
})



app.listen('3000', function(){
    console.log('Servidor funcionando!')
})