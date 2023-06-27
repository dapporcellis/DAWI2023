const express = require('express');
const routes = express.Router();
const controller = require('../controller/filmeController')
const multer = require('multer')
const upload = multer({ dest: 'public/fotos' })
//criar rotas aqui

routes.get('/filme/add', controller.abreadd)
routes.post('/filme/add',upload.single('foto'), controller.add)

routes.get('/filme/lst', controller.listar)
routes.post('/filme/lst', controller.filtrar)

routes.get('/filme/edt/:id', controller.abreedt)
routes.post('/filme/edt/:id',upload.single('foto'), controller.edt)

routes.get('/filme/del/:id', controller.del)

module.exports = routes