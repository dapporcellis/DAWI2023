const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const passport = require("../config/passport");

  async function principal(req, res) {
    res.render("conteudo/principal.ejs");
  }

  async function menu(req, res) {
    res.render("conteudo/menu.ejs");
  }

  async function pedidos(req, res) {
    res.render("conteudo/meuspedidos.ejs");
  }

  async function abrecarrinho(req, res) {
    res.render("conteudo/carrinho.ejs");
  }

  async function addmenu(req, res) {
    res.render("admin/addmenu.ejs");
  }

  module.exports = { principal, menu, pedidos, abrecarrinho, addmenu};
