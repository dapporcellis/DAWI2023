const Usuario = require("../models/Usuario");
const Cardapio = require("../models/Cardapio");
const bcrypt = require("bcrypt");
const {Op} = require("sequelize")

  async function principal(req, res) {
    res.render("conteudo/principal.ejs");
  }

  async function menu(req, res) {
    const cardapio = await Cardapio.findAll({
      
    }).catch(function (err) {
      console.log(err)
    });
    res.render("conteudo/menu", { Cardapio: cardapio });
  }

  

  async function pedidos(req, res) {
    res.render("conteudo/meuspedidos.ejs");
  }

  async function abrecarrinho(req, res) {
    if(!req.session.carrinho){
      req.session.carrinho = []
    }
    const cardapio = await Cardapio.findAll({
      where:{
        id:{
          [Op.or]:[req.session.carrinho]
        } 
      }
    })
    console.log(cardapio)
    res.render("conteudo/carrinho.ejs", {Cardapio:cardapio});
  }

  async function addmenu(req, res) {
    res.render("admin/addmenu.ejs");
  }

  async function criarmenu(req, res){
    const cardapio = await Cardapio.create({
      foto: req.file.filename,
      titulo: req.body.titulo,
      valor: req.body.valor,
      tipo: req.body.tipo,
    }).catch(err=>{
      console.log(err)
    });
    res.redirect("/menu");
  };

  async function addcarrinho(req, res) {
    if(!req.session.carrinho){
      req.session.carrinho = []
    }
    req.session.carrinho.push(req.params.id)
    res.redirect('/menu')
  }

  

  module.exports = { 
    principal,
    menu, 
    pedidos, 
    abrecarrinho, 
    addmenu,
    criarmenu,
    addcarrinho,
  };
