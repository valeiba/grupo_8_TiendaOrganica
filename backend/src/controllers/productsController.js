const { validationResult } = require("express-validator");
const path = require("path");
const { Op } = require("sequelize");
const db = require("../database/models");
const Product = require("../database/models/Product");
const productsApiController = require("./api/productsApiController");

const controller = {
  // render
  products: (req, res) => {
    return res.render("products/index", { products: [], total: 0 });
  },

  //filtrar productos
  filterProducts: function (req, res) {
    db.Product.findAll({
      where: {
        category_id: req.params.id,
      },
    }).then(function (products) {
      res.render("products/index", { products: products });
    });
  },
  search: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        where: {
          name: {
            [Op.like]: `${req.query.name}%`,
          },
        },
      });
      return res.render("products/search", {
        products,
      });
    } catch (error) {
      return console.log(error);
    }
  },
  // detalle
  detail: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id, {
      include: ["categories"],
    });
    const relatedProducts = await db.Product.findAll({
      where: {
        category_id: product.category_id,
        id: {
          [Op.ne]: product.id,
        },
      },
    });
    res.render("products/detail", {
      product,
      relatedProducts,
    });
  },
  //crear
  create: function (req, res) {
    let promCategories = db.Category.findAll();
    Promise.all([promCategories])
      .then(([allCategories]) => {
        return res.render("products/create", { allCategories });
      })
      .catch((error) => res.send(error));
  },
  store: function (req, res) {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      let promCategories = db.Category.findAll();
      Promise.all([promCategories]).then(([allCategories]) => {
        return res.render("products/create", {
          allCategories,
          errors: resultValidation.mapped(),
        });
      });
    } else {
      //  let productAlreadyExists = db.Product.findOne({
      //     where: {
      //     name: req.body.name
      //   }
      // });

      //  if (productAlreadyExists) {
      //    return res.render("products/create", {
      //    errors: {
      //     name: {
      //      msg: "El Producto ya existe",
      //     },
      //  },
      //    oldData: req.body,
      //  });
      // }
      let image;
      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = "image-default.jpg";
      }
      db.Product.create({
        name: req.body.name,
        price: req.body.price,
        presentation: req.body.presentation,
        description: req.body.description,
        stock: req.body.stock,
        on_sale: req.body.on_sale,
        category_id: req.body.category_id,
        image: image,
      })

        .then(() => {
          return res.redirect("/products/all");
        })
        .catch((error) => res.send(error));
    }
  },

  //editar
  edit: function (req, res) {
    let productId = req.params.id;
    let promProducts = db.Product.findByPk(req.params.id, {
      include: ["categories"],
    });
    let promCategories = db.Category.findAll();

    Promise.all([promProducts, promCategories])
      .then(([product, allCategories]) => {
        return res.render("products/edit", { product, allCategories });
      })
      .catch((error) => res.send(error));
  },
  update: function (req, res) {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length == 0) {
      let image;
      if (req.file != undefined) {
        image = req.file.filename;
      } else {
        image = "image-default.jpg";
      }
      db.Product.update(
        {
          name: req.body.name,
          price: req.body.price,
          presentation: req.body.presentation,
          description: req.body.description,
          stock: req.body.stock,
          on_sale: req.body.on_sale,
          category_id: req.body.category_id,
          image: image,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          return res.redirect("/products/all");
        })
        .catch((error) => res.send(error));
    } else {
      let promProducts = db.Product.findByPk(req.params.id, {
        include: ["categories"],
      });
      let promCategories = db.Category.findAll();

      Promise.all([promProducts, promCategories]).then(
        ([product, allCategories]) => {
          return res.render("products/edit", {
            product,
            allCategories,
            errors: resultValidation.mapped(),
          });
        }
      );
    }
  },
  //eliminar
  delete: function (req, res) {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        return res.render("products/delete", { product });
      })
      .catch((error) => res.send(error));
  },
  destroy: function (req, res) {
    db.Product.destroy({
      where: { id: req.params.id },
      force: true,
    })
      .then(() => {
        return res.redirect("/products/all");
      })
      .catch((error) => res.send(error));
  },
};
module.exports = controller;
