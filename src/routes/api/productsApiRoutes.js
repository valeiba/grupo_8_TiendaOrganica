const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

router.get("/", productsApiController.products);
router.get("/all", productsApiController.getAllProducts);
router.get("/last", productsApiController.Last);
router.get("/:id", productsApiController.getOneProduct);

module.exports = router;
