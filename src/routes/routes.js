import express from "express";
import {
  /*------------Usuário------------*/
  getLogin,
  postLogin,
  getRegistro,
  postRegistro,
  getIndex,
  /*------------Clientes------------*/
  getViewClientes,
  getViewClientesDetalhes,
  getCreateClientes,
  postCreateClientes,
  getEditClientes,
  postEditClientes,
  deleteClientesById,
  /*------------Produtos------------*/
  getViewProdutos,
  getViewProdutosDetalhes,
  getCreateProdutos,
  postCreateProdutos,
  getEditProdutos,
  postEditProdutos,
  postDeleteProdutosById,
  /*------------Vendas-------------*/
  getViewVendas,
  getViewVendasDetalhes,
  getCreateVendas,
  postCreateVendas,
} from "../controller/dados.controller.js";
import { verifyJWT } from "../../public/js/script.js";

export const routes = express.Router();

/*------------Usuário------------*/

routes.get("/login", getLogin);

routes.post("/login", postLogin);

routes.get("/registro", getRegistro);

routes.post("/registro", postRegistro);

routes.get("/index", getIndex);

/*------------Clientes------------*/

routes.get("/view/clientes", getViewClientes);

routes.get("/view/clientes/:id", getViewClientesDetalhes);

routes.get("/registro/clientes", getCreateClientes);

routes.post("/registro/clientes", postCreateClientes);

routes.get("/view/clientes/edit/:id", getEditClientes);

routes.post("/view/clientes/edit/:id", postEditClientes);

routes.post("/view/clientes/:id", deleteClientesById);

/*------------Produtos------------*/

routes.get("/view/produtos", getViewProdutos);

routes.get("/view/produtos/:id", getViewProdutosDetalhes);

routes.get("/registro/produtos", getCreateProdutos);

routes.post("/registro/produtos", postCreateProdutos);

routes.get("/view/produtos/edit/:id", getEditProdutos);

routes.post("/view/produtos/edit/:id", postEditProdutos);

routes.post("/view/produtos/:id", postDeleteProdutosById);

/*------------Vendas------------*/

routes.get("/view/vendas", getViewVendas);

routes.get("/view/vendas/:id", getViewVendasDetalhes);

routes.get("/registro/vendas", getCreateVendas);

routes.post("/registro/vendas", postCreateVendas);
