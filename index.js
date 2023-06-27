const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const usuarioroutes = require('./routes/UsuarioRoutes')
const filmeroutes = require('./routes/FilmeRoutes')
const postRoutes = require('./routes/PostRoutes')
app.use(usuarioroutes)
app.use(filmeroutes)
app.use(postRoutes)

app.listen(port, function(){
    console.log('Servidor funcionando!')
})