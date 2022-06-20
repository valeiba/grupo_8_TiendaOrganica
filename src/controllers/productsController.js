const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "/../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  products: async (req, res) => {
    try {
      const products = await JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      res.render("./products/products", {
        products,
      });
    } catch (error) {
      console.error(error);
    }
  },
  detail: async (req, res) => {
    try {
      const basketProducts = products.filter((product) => product.category === "baskets");
      const product = products.find((product) => product.id == req.params.id);
      res.render("./products/detail", {
        product,
        basketProducts,
      });
    } catch (error) {
      console.error(error);
    }
  },
  create: async (req, res) => {
    try {
      res.render("./products/create");
    } catch (error) {
      console.error(error);
    }
  },
  store: async (req, res) => {
    try {
      let image;
      if (req.file != undefined) {
        image = await req.file.filename;
      }
      let newProduct = {
        id: products[products.length - 1].id + 1,
        image,
        ...req.body,
      };
      await products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/products");
    } catch (error) {
      console.error(error);
    }
  },
  edit: async (req, res) => {
    try {
      let productToEdit = products.find((product) => product.id == req.params.id);
      res.render("./products/edit", {productToEdit});
    } catch (error) {
      console.error(error);
    }
  },
  update: async (req, res) => {
    try {
      let id = req.params.id;
      let productToEdit = products.find((product) => product.id == id);
      let image;

      if (req.file != undefined) {
        image = await req.file.filename;
      } else {
        image = productToEdit.image;
      }

      productToEdit = {
        id: productToEdit.id,
        ...req.body,
        image: image,
      };

      let newProducts = await products.map((product) => {
        if (product.id == productToEdit.id) {
          return (product = {...productToEdit});
        }
        return product;
      });

      fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
      res.redirect("/products");
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (req, res) => {
    try {
      let filteredProducts = await products.filter((product) => product.id != req.params.id);
      fs.writeFileSync(productsFilePath, JSON.stringify(filteredProducts, null, " "));
      res.redirect("/products");
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = controller;
