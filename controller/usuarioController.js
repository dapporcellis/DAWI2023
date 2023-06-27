const Usuario = require('../model/Usuario')

function abreadd(req, res){
    res.render('usuario/add')
}

function add(req,res){
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename
    })

    usuario.save().then(function(usuario, err){
        if(err){
            res.send(err);
        }else{
            res.redirect("/usuario/add")
        }
    })
}

function listar(req,res){
    Usuario.find({}).then(function(usuarios,err){
        if(err){
            res.send(err)
        }else{
            res.render('usuario/lst',{Usuarios:usuarios})
        }
    })
}

function filtrar(req,res){
    Usuario.find({nome: new RegExp(req.body.pesquisar.split(' ').join('.*'),'ig')}).then(function(usuarios,err){
        if(err){
            res.send(err)
        }else{
            res.render('usuario/lst',{Usuarios:usuarios})
        }
    })
}

function del(req,res){
    Usuario.findByIdAndDelete(req.params.id).then(function(usuario,err){
        if(err){
            res.send(err)
        }else{
            res.redirect('/usuario/lst')
        }
    })
}

function abreedt(req,res){
    Usuario.findById(req.params.id).then(function(usuario,err){
        if(err){
            res.send(err)
        }else{
            res.render('usuario/edt', {Usuario:usuario})
        }
    })    
}

function edt(req,res){
    Usuario.findById(req.params.id).then(function(usuario,err){
        if(err){
            res.send(err)
        }else{
            usuario.nome = req.body.nome;
            usuario.email = req.body.email;
            usuario.senha = req.body.senha;
            usuario.foto = req.body.foto;
            usuario.save().then(function(usuario,err){
                if(err){
                    res.send(err);
                }else{
                    res.redirect('/usuario/lst')
                }
            })
        }
    })
}

module.exports = {
    edt,
    abreedt,
    del,
    filtrar,
    listar,
    add,
    abreadd,
}