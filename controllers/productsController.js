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
    const basketProducts = products.filter(product => product.category === 'baskets');
    console.log(basketProducts);
    const product = products.find((product) => product.id == req.params.id);
    res.render("./products/detail", {
      basketProducts,
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
    res.render("./products/edit", {productToEdit});
  },
  update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    let image;

    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = productToEdit.image;
    }

    console.log(image);
    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: image,
    };

    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = {...productToEdit});
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    res.redirect("../../products");
  },
  delete: (req, res) => {
    let filteredProducts = products.filter((product) => product.id != req.params.id);
    fs.writeFileSync(productsFilePath, JSON.stringify(filteredProducts, null, " "));
    res.redirect("../../products");
  },
};

module.exports = controller;
