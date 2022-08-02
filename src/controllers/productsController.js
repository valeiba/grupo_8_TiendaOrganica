const {validationResult} = require("express-validator");
const db = require("../database/models");

const listAllProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll();
    return res.render("products/index", {
      products,
    });
  } catch (error) {
    return console.log(error);
  }
};

const filterProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      where: {
        category_id: req.params.id,
      },
    });
    return res.render("products/index", {
      products,
    });
  } catch (error) {
    return console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const products = await db.Product.findAll();
    const categories = await db.Category.findAll();
    return res.render("products/create", {
      products,
      categories,
    });
  } catch (error) {
    return console.log(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await db.Product.create({});
    return res.render("products/all");
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {listAllProducts, filterProducts, create, createProduct};
