const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController"); //importa as funções de controller
const principalController = require("../controllers/principalController"); 
const upload = require("../config/upload");
const autenticacao = require("../config/autenticacao");
const autenticacaoadmin = require("../config/autenticacaoadmin");



//abrir a tela de login e cadastro
router.get("/login", loginController.abreTela);

router.get("/cadastro", loginController.cadastrar);

<<<<<<< HEAD
router.get("/principal", loginController.principal);
=======
router.get("/", principalController.principal);

router.get("/meuspedidos", principalController.pedidos);

router.get("/carrinho", principalController.abrecarrinho);

router.get("/menu", 
autenticacao,
principalController.menu,

);

router.get("/addmenu", 
autenticacaoadmin,
principalController.addmenu,

);



router.get("/carrinho/add/:id", 
autenticacao,
principalController.addcarrinho,

);


module.exports = router;
