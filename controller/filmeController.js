const Filme = require('../model/Filme')

function abreadd(req, res) {
    res.render('filme/add')
}

function add(req, res) {
    let tempo = req.body.tempo; // Supondo que você esteja recebendo o valor do formulário corretamente

    // Obtendo a hora e minuto a partir do valor do tempo
    let [hora, minuto] = tempo.split(':');

    // Criando um novo objeto Date
    let data = new Date();
    data.setHours(hora);
    data.setMinutes(minuto);
    let filme = new Filme({
        titulo: req.body.titulo,
        genero: req.body.genero,
        diretor: req.body.diretor,
        ano: parseInt(req.body.ano),
        foto: req.body.foto,
        tempo: data
    })

    filme.save().then(function (filme, err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/filme/add")
        }
    })
}

function listar(req, res) {
    Filme.find({}).then(function (filmes, err) {
        if (err) {
            res.send(err)
        } else {
            res.render('filme/lst', {
                Filmes: filmes
            })
        }
    })
}

function filtrar(req, res) {
    Filme.find({
        titulo: new RegExp(req.body.pesquisar.split(' ').join('.*'), 'ig')
    }).then(function (filmes, err) {
        if (err) {
            res.send(err)
        } else {
            res.render('filme/lst', {
                Filmes: filmes
            })
        }
    })
}

function del(req, res) {
    Filme.findByIdAndDelete(req.params.id).then(function (filme, err) {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/filme/lst')
        }
    })
}

function abreedt(req, res) {
    Filme.findById(req.params.id).then(function (filme, err) {
        if (err) {
            res.send(err)
        } else {
            res.render('filme/edt', {
                Filme: filme
            })
        }
    })
}

function edt(req, res) {
    Filme.findById(req.params.id).then(function (filme, err) {
        if (err) {
            res.send(err)
        } else {
            let tempo = req.body.tempo; 
            // Obtendo a hora e minuto a partir do valor do tempo
            let [hora, minuto] = tempo.split(':');

            // Criando um novo objeto Date
            let data = new Date();
            data.setHours(hora);
            data.setMinutes(minuto);
            filme.titulo = req.body.titulo;
            filme.genero = req.body.genero;
            filme.diretor = req.body.diretor;
            filme.ano = req.body.ano;
            filme.foto = req.body.foto;
            filme.tempo = data;
            filme.save().then(function (filme, err) {
                if (err) {
                    res.send(err);
                } else {
                    res.redirect('/filme/lst')
                }
            })
        }
    })
}




module.exports = {
    abreadd,
    add,
    listar,
    filtrar,
    abreedt,
    edt,
    del
}