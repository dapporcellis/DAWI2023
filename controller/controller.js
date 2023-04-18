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
    console.log(horas)

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
    res.render('resposta')
}

module.exports = {
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