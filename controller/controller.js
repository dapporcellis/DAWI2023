function olamundo(req, res) {
    res.render('ola1', {nome: 'Mundo!'})
}

function olanome(req, res) {
    res.render('ola1',{nome:req.params.nome})
}

function ola(req,res){
    if(typeof req.query.nome != 'undefined'){
        res.send("Oi "+req.query.nome)
    }else{
        res.render('pagina')
    }
}

function disciplina(req,res){
    res.render('disciplina')
}

function bbb(req,res){
    res.send('Site do BBB')
}

function saudacao(req, res) {
    let data = new Date();
    let horas = data.getHours();

    if(horas>=6 && horas<12){
        res.send('Bom dia!')
    }else if(horas>=12 && horas<18){
        res.send('Boa Tarde!')
    }else{
        res.send('Boa Noite!')
    }
}

function oi(req,res){
    res.send('Oi '+req.params.nome)
}

function quadrado(req,res){
    let numero = parseInt(req.params.numero)
    let quadrado = numero*numero
    res.send("O quadrado do numero: "+numero+" é "+quadrado)
}

function raiz(req,res){
    let numero = parseFloat(req.params.numero)
    let raiz = Math.sqrt(numero)
    res.send("A raiz do número: "+numero+" é "+raiz)
}

function soma(req,res){
    let resultado = parseInt(req.params.num1)+parseInt(req.params.num2)
    res.send(req.params.num1+" + "+req.params.num2+" = "+resultado)
}

function oinomesobrenome(req,res){
    res.send('Oi '+req.params.nome+" "+req.params.sobrenome)
}

function formulario(req,res){
    res.render('formulario')
}

function olapost(req,res){
    let data = new Date();
    let horas = data.getHours();
    let turno;

    if(horas>=6 && horas<12){
        turno = 'Bom dia'
    }else if(horas>=12 && horas<18){
        turno = 'Boa tarde'
    }else{
        turno = 'Boa noite'
    }


    res.render('resposta',{nome:req.body.nome,turno:turno})
}

function abresoma(req,res){
    res.render('soma/soma.ejs')
}

function soma1(req,res){
    let valor1 = parseInt(req.body.valor1)
    let valor2 = parseInt(req.body.valor2)
    let soma = valor1+valor2
    res.render('soma/resposta.ejs',{valor1:valor1,valor2:valor2,soma:soma})
}

function abrequadrado(req,res){
    res.render('quadrado/quadrado.ejs')
}

function quadrado1(req,res){
    let valor = parseInt(req.body.valor)
    let resposta = valor*valor
    res.render('quadrado/resposta.ejs', {valor:valor,resposta:resposta})
}

function abreraiz(req,res){
    res.render('raiz/raiz.ejs')
}

function raiz1(req,res){
    let valor = parseInt(req.body.valor)
    let resposta = Math.sqrt(valor)
    res.render('raiz/resposta.ejs',{valor:valor,resposta:resposta})
}

function abreimpar(req, res){
    res.render('impar/impar.ejs')
}
function impar(req,res){
    let valor = parseInt(req.body.valor)
    let resposta;
    if(valor%2 == 0){  
        resposta = 'Par'
    }else{
        resposta = 'Impar'
    }
    res.render('impar/resposta.ejs', {valor:valor,resposta:resposta})
}

function abremaior(req,res){
    res.render('maior/maior.ejs')
}

function maior(req,res){
    let valor1 = parseInt(req.body.valor1)
    let valor2 = parseInt(req.body.valor2)
    res.render('maior/resposta.ejs',{valor1:valor1,valor2:valor2})
}

function abreadduser(req, res){
    res.render('usuario/add')
}

const Usuario = require('../model/Usuario')

function adduser(req,res){
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.body.foto
    })

    usuario.save().then(function(usuario, err){
        if(err){
            res.send(err);
        }else{
            res.redirect("/usuario/add")
        }
    })
}

module.exports = {
    adduser,
    abreadduser,
    maior,
    abremaior,
    abreimpar,
    impar,
    raiz1,
    abreraiz,
    quadrado1,
    abrequadrado,
    soma1,
    abresoma,
    olapost,
    formulario,
    oinomesobrenome,
    soma,
    raiz,
    quadrado,
    oi,
    saudacao,
    bbb,
    disciplina,
    ola,
    olamundo,
    olanome
}