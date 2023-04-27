const { DataTypes } = require("sequelize");
const conexao = require("../config/sequelize"); 

const Token = conexao.define(
  "Token",
  {
    Token: {
      type: DataTypes.STRING,
    },
    Dataexpiracao: {
        type: DataTypes.DATE,
    },
  },
  {
    timestamps: false, 
    tableName: "usuarios", 
  }
);

module.exports = Token;
