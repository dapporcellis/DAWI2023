const { DataTypes } = require("sequelize");
const conexao = require("../config/conexao");

const Pedido = conexao.define(
    "Pedido", //não precisa dados de autoincremento: id
    {
        datapedido: {
            type: DataTypes.DATEONLY,
        },
        dataaceito: {
            type: DataTypes.DATEONLY,
        },
        situacao: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false, //sequelize trabalha com timestamps 'não cria data de atualização'
        tableName: "pedidos",
    }
);

module.exports = Pedido;