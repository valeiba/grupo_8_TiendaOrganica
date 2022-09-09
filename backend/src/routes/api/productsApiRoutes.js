const express = require("express");
const router = express.Router();
const productsApiController = require("../../controllers/api/productsApiController");

router.get("/", productsApiController.products);
router.get("/all", productsApiController.getAllProducts);
router.post("/create", productsApiController.create);
router.post("/edit", productsApiController.edit);
router.delete("/delete/:id", productsApiController.delete);
// total productos vendidos
router.get("/onSales", productsApiController.productsOnSales);
// top 5 productos vendidos
router.get("/topFiveProducts", productsApiController.topFiveProducts);
router.get("/last", productsApiController.Last);
router.get("/:id", productsApiController.getOneProduct);

module.exports = router;
