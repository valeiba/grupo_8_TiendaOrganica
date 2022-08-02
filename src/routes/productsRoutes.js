const express = require("express");
const router = express.Router();
const { listAllProducts, filterProducts, create, createProduct } = require("../controllers/productsController");
const uploadProduct = require("../middlewares/multerProductsMiddleware");
const createProductMiddleware = require("../middlewares/createProductMiddleware");

// /products (GET) Listado de productos OK
router.get("/all", listAllProducts);
router.get("/category/:id", filterProducts);

// //router.get("/productcart", controller.productCart);

// // /products/:id (GET) Detalle de un producto particular OK
// router.get("/:id/detail", controller.detail);

// // /products/create (GET) Formulario de creación de productos OK
router.get("/create", create);

// // /products (POST) Acción de creación (a donde se envía el formulario OK
router.post("/create", uploadProduct.single('image'), createProductMiddleware, createProduct);

// // /products/:id/edit (GET) Formulario de edición de productos OK
// router.get("/edit/:id", controller.edit);

// // /products/:id (PUT) Acción de edición (a donde se envía el formulario) 
// router.put("/edit/:id", uploadProduct.single('image'), createProductMiddleware, controller.update);

// // /products/:id (DELETE) Acción de borrado 
// router.get("/delete/:id", controller.delete);
// router.delete("/delete/:id", controller.destroy);

module.exports = router;
