const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const productsApiController = {
  getAllProducts: (req, res) => {
    db.Product.findAll({
      include: ["categories"],
    }).then((products) => {
      let respuesta = {
        meta: {
          status: 200,

          total: products.length,

          url: "api/products/all",
        },
        data: products,
        detail: products.forEach((products) => {
          products.dataValues.detail = `http://localhost:3001/api/products/${products.id}`;
        }),
      };
      res.json(respuesta);
    });
  },
  getOneProduct: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["categories"],
    }).then((product) => {
      let respuesta = {
        meta: {
          status: 200,

          url: "/api/products/:id",
        },
        data: product,
        // imageProduct:
        //   (product.dataValues.image = `http://localhost:3001/api/products/${product.image}`),
      };
      res.json(respuesta);
    });
  },
  Last: (req, res) => {
    db.Product.findAll({
      order: [["id", "DESC"]],
    }).then((products) => {
      let respuesta = {
        meta: {
          status: 200,

          url: "/api/products/last",
        },
        data: products,
      };
      res.json(respuesta);
    });
  },
  //listar
  products: function (req, res) {
    let limit = parseInt(req.query.limit) || 10;
    let page = parseInt(req.query.page) || 1;

    db.Product.findAndCountAll({
      include: ["categories"],
      limit: limit || 10,
      offset: page ? (page - 1) * limit : 0,
    }).then(function ({ count, rows }) {
      // res.render("products/index", { products: rows, total: count });
      return res.json({ products: rows, total: count });
    });
  },
  // total productos vendidos
  productsOnSales: function (req, res) {
    db.Product.findAll({
      where: {
        on_sale: {
          [Op.gt]: 0,
        },
      },
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("on_sale")), "totalOnSale"],
      ],
    }).then(function (products) {
      res.json({
        meta: {
          status: 200,
          url: "/api/products/onSales",
        },
        data: products[0],
      });
    });
  },
  // top 5 productos mas vendidos
  topFiveProducts: function (req, res) {
    db.Product.findAll({
      order: [["on_sale", "DESC"]],
      limit: 5,
    }).then(function (products) {
      res.json({
        meta: {
          status: 200,
          url: "/api/products/topFiveProducts",
        },
        data: products,
      });
    });
  },
};
module.exports = productsApiController;