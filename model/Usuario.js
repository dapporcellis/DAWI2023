const conexao = require('../config/conexao') 

let UsuarioSchema = new conexao.Schema({
    nome: String,
    email: String,
    senha: String,
    criacao: { type: Date, default: Date.now },
    foto: String
})

module.exports = conexao.model("Usuario", UsuarioSchema)