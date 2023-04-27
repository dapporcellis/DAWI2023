const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");
const transporter = require("../config/email");


async function cadastro(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(senha, salt);
  const usuario = await Usuario.create({
    nome: nome,
    email: email,
    senha: hash,
  });
  res.redirect("/login");
}



async function abreTela(req, res) {
  res.render("login/login.ejs");
}

async function cadastrar(req, res) {
    res.render("login/cadastro.ejs");
}

<<<<<<< HEAD
async function principal(req, res) {
  res.render("conteudo/principal.ejs");
}

const logar = passport.authenticate("local", {
  failureRedirect: "/", 
  successRedirect: "/principal",
=======
async function forgot(req,res) {
  res.render("login/forgot.ejs");
}

async function telatoken(req,res) {
  res.render("login/token.ejs");
}


async function recuperar(req,res) {
  let token = generatePassword();
  let usuario = await Usuario.findOne({
    where: {
      email: req.body.email
    }
  })
  console.log(usuario)
  const email = {
    from: 'recuperacaodesenhaif@hotmail.com',
    to: usuario.email,
    subject: 'Recuperação de senha!',
    text: 'Olá '+usuario.nome+' você tentou recuperar a senha pelo site! acesse o site http://localhost:3002/recuperacao e insira o token: '+token+''
  };
  
  console.log(email)

  transporter.sendMail(email, (err, result)=>{
    if(err) return console.log("Oi")
    
  })
  res.redirect("/token");
}

function generatePassword(){
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var pass = ''
    for(var i=0; i< 10; i++)
      pass += chars.charAt(Math.random() * 61)
    return pass
    
}

const logar = passport.authenticate("local", {
  failureRedirect: "/", 
  successRedirect: "/",
});

module.exports = { abreTela, cadastro, cadastrar, logar};
