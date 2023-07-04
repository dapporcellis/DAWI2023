const conexao = require('../config/conexao')

let PostSchema = new conexao.Schema({
    titulo: String,
    texto: String,
    foto: String,
    usuario: { type: conexao.Schema.Types.ObjectId, ref: 'Usuario' },
})

module.exports = conexao.model("Post", PostSchema)