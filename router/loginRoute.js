const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController"); //importa as funções de controller

//abrir a tela de login e cadastro
router.get("/login", loginController.abreTela);

router.get("/cadastro", loginController.cadastrar);

router.get("/principal", loginController.principal);

router.post("/cadastro", loginController.cadastro);

router.post("/login", loginController.logar);


module.exports = router;
