const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/productcart", controller.productCart);
router.get("/productdetail", controller.productDetail);

module.exports = router;