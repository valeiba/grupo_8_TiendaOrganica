const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const uploadProduct = require("../middlewares/multerProductsMiddleware");
const createProductMiddleware = require("../middlewares/createProductMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validateAdminMiddleware = require("../middlewares/validateAdminMiddleware");

// /products (GET) Listado de productos OK
router.get("/all", controller.products);

router.get("/search", controller.search);

//filtrar productos por categorias
router.get("/category/:id", controller.filterProducts);

// /products/:id (GET) Detalle de un producto particular OK
router.get("/detail/:id", controller.detail);

// /products/create (GET) Formulario de creación de productos OK
router.get(
  "/create",
  authMiddleware,
  validateAdminMiddleware,
  controller.create
);

// /products (POST) Acción de creación (a donde se envía el formulario OK
router.post(
  "/create",
  uploadProduct.single("image"),
  createProductMiddleware,
  controller.store
);

// /products/:id/edit (GET) Formulario de edición de productos OK
router.get(
  "/edit/:id",
  authMiddleware,
  validateAdminMiddleware,
  controller.edit
);

// /products/:id (PUT) Acción de edición (a donde se envía el formulario)
router.put(
  "/edit/:id",
  uploadProduct.single("image"),
  createProductMiddleware,
  controller.update
);

// /products/:id (DELETE) Acción de borrado
router.get(
  "/delete/:id",
  authMiddleware,
  validateAdminMiddleware,
  controller.delete
);

router.delete("/delete/:id", controller.destroy);

module.exports = router;
