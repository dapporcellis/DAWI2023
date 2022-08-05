const express = require("express");
const app = express();
const path = require("path");
const porta = process.env.PORT || 3003;
var passport = require("passport");

const loginRoute = require("./router/loginRoute");



//configuração dos arquivos de visão (VIEWS)
app.set("view engine", "login.ejs");

//configurar para receber dados por metodo post
app.use(express.urlencoded({ extended: false }));

//pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));


app.use("/", loginRoute);


app.listen(porta, function () {
  console.log("Servidor funcionando!");
});