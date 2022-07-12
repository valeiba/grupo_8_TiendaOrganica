const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const path = require("path");
const multer = require("multer");

// ************ Multer ************ 
var storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, 'public/images/products')
  },
  filename: function(req,file,cb){
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
var upload = multer({storage: storage})

// /products (GET) Listado de productos OK
router.get("/", controller.products);

router.get("/productcart", controller.productCart);

// /products/:id (GET) Detalle de un producto particular OK
router.get("/:id/detail", controller.detail);

// /products/create (GET) Formulario de creación de productos OK
router.get("/create", controller.create);

// /products (POST) Acción de creación (a donde se envía el formulario OK
router.post("/", upload.single('image'), controller.store);

// /products/:id/edit (GET) Formulario de edición de productos OK
router.get("/:id/edit", controller.edit);

// /products/:id (PUT) Acción de edición (a donde se envía el formulario) PENDIENTE
router.put("/:id/edit", upload.single('image'), controller.update);

// /products/:id (DELETE) Acción de borrado PENDIENTE
router.get("/:id/delete", controller.delete);

module.exports = router;
