const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/routes')
const filmeroutes = require('./routes/FilmeRoutes')
app.use(routes)
app.use(filmeroutes)

app.listen(port, function(){
    console.log('Servidor funcionando!')
})