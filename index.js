const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');

const routes = require('./routes/routes')
app.use(routes)

app.listen(port, function(){
    console.log('Servidor funcionando!')
})