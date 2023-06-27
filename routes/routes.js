const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller')
const multer = require('multer')
const upload = multer({ dest: 'public/fotos' })

routes.get('/usuario/add', controller.abreadd)
routes.post('/usuario/add', upload.single('foto'), controller.add)

routes.get('/usuario/lst', controller.listar)
routes.post('/usuario/lst', controller.filtrar)

routes.get('/usuario/edt/:id', controller.abreedt)
routes.post('/usuario/edt/:id', controller.edt)

routes.get('/usuario/del/:id', controller.del)

routes.get('/formulario', controller.formulario)
routes.post('/formulario', controller.olapost)

routes.get('/soma', controller.abresoma)
routes.post('/soma', controller.soma1)

routes.get('/quadrado', controller.abrequadrado)
routes.post('/quadrado', controller.quadrado1)

routes.get('/raiz', controller.abreraiz)
routes.post('/raiz', controller.raiz1)

routes.get('/impar', controller.abreimpar)
routes.post('/impar', controller.impar)

routes.get('/maior', controller.abremaior)
routes.post('/maior', controller.maior)

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