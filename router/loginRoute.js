const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController"); //importa as funções de controller

//abrir a tela de login e cadastro
router.get("/", loginController.abreTela);

router.get("/cadastro", loginController.cadastrar);

router.post("/cadastro", loginController.cadastro);

router.post("/", loginController.logar);


module.exports = router;
