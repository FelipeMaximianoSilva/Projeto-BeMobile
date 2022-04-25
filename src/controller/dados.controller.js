import { clientes, usuarios, produtos, vendas } from "../model/dados.js";
import sequelize from "sequelize";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";
import { verifyJWT } from "../../public/js/script.js";

dotenv.config();

/*-------------------LOGIN-------------------*/

export const getLogin = async (req, res) => {
  try {
    const dados = await clientes.findAll();
    res.render("Login.ejs", {
      dados,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postLogin = async (req, res, next) => {
  var idUser = await usuarios.findAll({
    attributes: ["idUsuario"],
  });
  var login = await usuarios.findAll({
    attributes: ["emailUsuario"],
  });
  var pswd = await usuarios.findAll({
    attributes: ["passwordUsuario"],
  });
  if (login && pswd) {
    const token = jwt.sign({ idUser }, process.env.SECRET);
    return res.json({ auth: true, token: token }).redirect("/index");
    next();
  }
  res.status(500).json({ message: "Login inválido!" });
};

/*------------Usuário------------*/

export const getRegistro = async (req, res) => {
  try {
    res.render("registro.ejs");
  } catch (err) {
    console.log(err);
  }
};

export const postRegistro = async (req, res) => {
  try {
    const { nomeUsuario, emailUsuario, passwordUsuario } = req.body;
    await usuarios.create({
      nomeUsuario,
      emailUsuario,
      passwordUsuario,
    });
    res
      .status(200)
      .redirect("/login")
      .send({ message: "Cadastro realizado com sucesso!" });
  } catch (err) {
    res.send(err.message);
  }
};

export const getIndex = async (req, res) => {
  try {
    res.render("index.ejs");
  } catch (error) {
    console.log(error);
  }
};

/*------------Clientes------------*/

export const getViewClientes = async (req, res) => {
  verifyJWT;
  try {
    const dados = await clientes.findAll();
    res.render("listClientes.ejs", {
      dados,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getViewClientesDetalhes = async (req, res) => {
  try {
    const dados = await clientes.findByPk(req.params.id);
    const compras = await vendas.findAll({
      where: {
        clienteVendas: {
          [Op.eq]: (clientes.idClientes = req.params.id),
        },
      },
    });
    const produto = await produtos.findAll({
      where: {
        idProdutos: {
          [Op.eq]: (vendas.produtosVendas = req.params.id),
        },
      },
    });
    res.render("detalhesClientes.ejs", {
      dados,
      compras,
      produto,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCreateClientes = async (req, res) => {
  try {
    res.render("formClientes.ejs");
  } catch (err) {
    console.log(err);
  }
};

export const postCreateClientes = async (req, res) => {
  try {
    const {
      nomeClientes,
      telClientes,
      cpfClientes,
      Endereco,
      numEndereco,
      Bairro,
      Cidade,
      CEP,
    } = req.body;
    await clientes.create({
      nomeClientes,
      telClientes,
      cpfClientes,
      Endereco,
      numEndereco,
      Bairro,
      Cidade,
      CEP,
    });
    res.status(200).send({ message: "Cliente cadastrado com sucesso!" });
  } catch (err) {
    res.send(err.message);
  }
};

export const getEditClientes = async (req, res) => {
  const dados = await clientes.findByPk(req.params.id);
  try {
    res.render("formClientesEdit.ejs", {
      dados,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postEditClientes = async (req, res) => {
  try {
    const {
      nomeClientes,
      telClientes,
      cpfClientes,
      Endereco,
      numEndereco,
      Bairro,
      Cidade,
      CEP,
    } = req.body;
    await clientes.update(
      {
        nomeClientes,
        telClientes,
        cpfClientes,
        Endereco,
        numEndereco,
        Bairro,
        Cidade,
        CEP,
      },
      { where: { idClientes: req.params.id } }
    );
    res.status(200).redirect(`/view/clientes/${req.params.id}`);
    return;
  } catch (err) {
    res.send(err);
  }
};

export const deleteClientesById = async (req, res) => {
  const deleted = await clientes.findByPk(req.params.id);
  deleted.destroy();
  res.redirect("/view/clientes");
};

/*------------Produtos------------*/

export const getViewProdutos = async (req, res) => {
  try {
    const dados = await produtos.findAll({
      order: [["modeloProdutos", "ASC"]],
    });
    res.render("listProdutos.ejs", {
      dados,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getViewProdutosDetalhes = async (req, res) => {
  try {
    const dados = await produtos.findByPk(req.params.id);
    const compras = await vendas.findAll({
      where: {
        produtosVendas: {
          [Op.eq]: (produtos.idProdutos = req.params.id),
        },
      },
    });
    const cliente = await clientes.findAll({
      where: {
        idClientes: {
          [Op.eq]: (vendas.clienteVendas = req.params.id),
        },
      },
    });
    res.render("detalhesProdutos.ejs", {
      dados,
      compras,
      cliente,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCreateProdutos = async (req, res) => {
  try {
    res.render("formProdutos.ejs");
  } catch (err) {
    console.log(err);
  }
};

export const postCreateProdutos = async (req, res) => {
  try {
    const { tipoProdutos, marcaProdutos, modeloProdutos, precoProdutos } =
      req.body;
    await produtos.create({
      tipoProdutos,
      marcaProdutos,
      modeloProdutos,
      precoProdutos,
    });
    res.status(200).send({ message: "Produto cadastrado com sucesso!" });
  } catch (err) {
    res.send(err.message);
  }
};

export const getEditProdutos = async (req, res) => {
  const dados = await produtos.findByPk(req.params.id);
  try {
    res.render("formProdutosEdit.ejs", {
      dados,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postEditProdutos = async (req, res) => {
  try {
    const { tipoProdutos, marcaProdutos, modeloProdutos, precoProdutos } =
      req.body;
    await produtos.update(
      {
        tipoProdutos,
        marcaProdutos,
        modeloProdutos,
        precoProdutos,
      },
      { where: { idProdutos: req.params.id } }
    );
    res.status(200).redirect(`/view/produtos/${req.params.id}`);
    return;
  } catch (err) {
    res.send(err);
  }
};

export const postDeleteProdutosById = async (req, res) => {
  const dados = await produtos.findByPk(req.params.id);
  if (dados.isDeleted == true) {
    await produtos.update(
      { isDeleted: false },
      {
        where: {
          idProdutos: req.params.id,
        },
      }
    );
  } else {
    await produtos.update(
      { isDeleted: true },
      {
        where: {
          idProdutos: req.params.id,
        },
      }
    );
  }
  res.status(200).redirect(`/view/produtos/${req.params.id}`);
};

/*------------Vendas------------*/

export const getViewVendas = async (req, res) => {
  try {
    const dados = await vendas.findAll();
    const cliente = await clientes.findAll({
      attributes: ["idClientes", "nomeClientes"],
    });
    const produto = await produtos.findAll();
    res.render("listVendas.ejs", {
      dados,
      cliente,
      produto,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getViewVendasDetalhes = async (req, res) => {
  try {
    const dados = await vendas.findByPk(req.params.id);
    const cliente = await clientes.findAll();
    const produto = await produtos.findAll({
      where: {
        idProdutos: {
          [Op.eq]: (vendas.ProdutosVendas = req.params.id),
        },
      },
    });
    res.render("detalhesVendas.ejs", {
      dados,
      cliente,
      produto,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCreateVendas = async (req, res) => {
  try {
    const produto = await produtos.findAll();
    const cliente = await clientes.findAll();
    res.render("formVendas.ejs", {
      produto,
      cliente,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postCreateVendas = async (req, res) => {
  try {
    const { clienteVendas, produtosVendas, quantidadeVendas } = req.body;
    const timeVendas = new Date().toJSON();
    const valor = await produtos.findByPk(produtosVendas);
    const valorunVendas = valor.precoProdutos;
    await vendas.create({
      clienteVendas,
      produtosVendas,
      quantidadeVendas,
      valorunVendas,
      timeVendas,
    });
    res.redirect("/views/vendas");
  } catch (err) {
    res.send(err.message);
  }
};
