import Sequelize from "sequelize";
import { connection } from "../database/db.js";

export const clientes = connection.define(
  "clientes",
  {
    idClientes: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeClientes: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    telClientes: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    cpfClientes: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    Endereco: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    numEndereco: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    Bairro: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    Cidade: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    CEP: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

export const produtos = connection.define(
  "produtos",
  {
    idProdutos: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tipoProdutos: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    marcaProdutos: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    modeloProdutos: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    precoProdutos: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    isDeleted: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

export const usuarios = connection.define(
  "usuarios",
  {
    idUsuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeUsuario: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    emailUsuario: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    passwordUsuario: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);

export const vendas = connection.define(
  "vendas",
  {
    idVendas: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    clienteVendas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    produtosVendas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantidadeVendas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valorunVendas: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    timeVendas: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
);
