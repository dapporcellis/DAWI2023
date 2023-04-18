const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const routes = require('./routes/routes')
app.use(routes)

app.listen('3000', function(){
    console.log('Servidor funcionando!')
})