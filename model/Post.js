const conexao = require('../config/conexao') 

let PostSchema = new conexao.Schema({
    titulo: String,
    texto: String,
    foto: String
})

module.exports = conexao.model("Post", PostSchema)