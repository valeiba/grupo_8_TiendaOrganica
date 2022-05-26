const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "/../data/mock_products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  products: (req, res) => {
    res.render("./products/products", {
      products,
    });
  },
  detail: (req, res) => {
    const product = products.find((product) => product.id == req.params.id);
    res.render("./products/detail", {
      product,
    });
  },
  create: (req, res) => {
    res.render("./products/create");
  },
  store: (req, res) => {
    let image;
    if (req.file != undefined) {
      image = req.file.filename;
    }
    let newProduct = {
      id: products[products.length - 1].id + 1,
      image,
      ...req.body,
    };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.redirect("./products");
  },
  edit: (req, res) => {
    let productToEdit = products.find((product) => product.id == req.params.id);
    res.render("./products/edit", { productToEdit });
  },
  update: (req, res) => {
    let productToUpdate = products.find((product) => product.id == req.body.id);

    productToUpdate.name = req.body.name;
    productToUpdate.price = req.body.price;
    productToUpdate.description = req.body.description;
    productToUpdate.available = req.body.available;
    productToUpdate.image = req.body.image;
    productToUpdate.category = req.body.category;

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
    res.send("update");
  },
  delete: (req, res) => {
    let filteredProducts = products.filter(
      (product) => product.id != req.params.id
    );
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(filteredProducts, null, " ")
    );
    res.redirect("../../products");
  },
};

module.exports = controller;
