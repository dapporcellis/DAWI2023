const Post = require('../model/Post')
const Usuario = require('../model/Usuario')

function abreadd(req, res) {
    Usuario.find({}).then(function(usuarios){
        res.render('post/add', {Usuarios: usuarios})
    })    
}

function add(req, res) {
    // Criando um novo objeto Date
    let post = new Post({
        titulo: req.body.titulo,
        texto: req.body.texto,
        foto: req.file.filename,
        usuario: req.body.usuario
    })

    post.save().then(function (post, err) {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/post/add")
        }
    })
}

function listar(req, res) {
    Post.find({}).populate('usuario').then(function (posts, err) {
        if (err) {
            res.send(err)
        } else {
            res.render('post/lst', {
                Posts: posts
            })
        }
    })
}

function filtrar(req, res) {
    Post.find({
        titulo: new RegExp(req.body.pesquisar.split(' ').join('.*'), 'ig')
    }).then(function (posts, err) {
        if (err) {
            res.send(err)
        } else {
            res.render('post/lst', {
                Posts: posts
            })
        }
    })
}

function del(req, res) {
    Post.findByIdAndDelete(req.params.id).then(function (post, err) {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/post/lst')
        }
    })
}

function abreedt(req, res) {
    Post.findById(req.params.id).then(function (post, err) {
        if (err) {
            res.send(err)
        } else {
            res.render('post/edt', {
                Post: post
            })
        }
    })
}

function edt(req, res) {
    Post.findById(req.params.id).then(function (post, err) {
        if (err) {
            res.send(err)
        } else {
            post.titulo = req.body.titulo,
            post.texto = req.body.texto,
            post.foto = req.file.filename,
            post.save().then(function (post, err) {
                if (err) {
                    res.send(err);
                } else {
                    res.redirect('/post/lst')
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