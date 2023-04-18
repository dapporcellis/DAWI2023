const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller')

routes.get('/', controller.olamundo)
routes.get('/:nome', controller.olanome)
/*
routes.get('/', controller.ola)
routes.get('/algoritmoi', controller.disciplina)
routes.get('/bbb', controller.bbb)
routes.get('/saudacao', controller.saudacao)
routes.get('/:nome', controller.oi)
routes.get('/quadrado/:numero', controller.quadrado)
routes.get('/raiz/:numero', controller.raiz)
routes.get('/soma/:num1/:num2',controller.soma)
routes.get('/:nome/:sobrenome', controller.nomesobrenome)
*/
module.exports = routes