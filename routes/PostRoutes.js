const express = require('express');
const routes = express.Router();
const controller = require('../controller/postController')
const multer = require('multer')
const upload = multer({ dest: 'public/fotos' })
//criar rotas aqui

routes.get('/post/add', controller.abreadd)
routes.post('/post/add',upload.single('foto'), controller.add)

routes.get('/post/lst', controller.listar)
routes.post('/post/lst', controller.filtrar)

routes.get('/post/edt/:id', controller.abreedt)
routes.post('/post/edt/:id',upload.single('foto'), controller.edt)

routes.get('/post/del/:id', controller.del)

module.exports = routes