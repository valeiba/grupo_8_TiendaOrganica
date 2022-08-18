const express = require("express");
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

router.get("/all", productsApiController.getAllProducts);
router.get("/:id", productsApiController.getOneProduct);
router.get("/last", productsApiController.Last);

module.exports=router