const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController"); //importa as funções de controller
const principalController = require("../controllers/principalController"); 

//abrir a tela de login e cadastro
router.get("/login", loginController.abreTela);

router.get("/cadastro", loginController.cadastrar);

<<<<<<< HEAD
router.get("/principal", loginController.principal);
=======
router.get("/", principalController.principal);

router.get("/meuspedidos", principalController.pedidos);

router.get("/carrinho", principalController.abrecarrinho);


router.get("/menu", principalController.menu);

router.get("/addmenu", principalController.addmenu);


>>>>>>> 8236563 (first commit)

router.post("/cadastro", loginController.cadastro);

router.post("/login", loginController.logar);


module.exports = router;
