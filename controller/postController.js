const Post = require('../model/Post')

function abreadd(req, res) {
    res.render('post/add')
}

function add(req, res) {
    // Criando um novo objeto Date
    let post = new Post({
        titulo: req.body.titulo,
        texto: req.body.texto,
        foto: req.file.filename,
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
    Post.find({}).then(function (posts, err) {
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