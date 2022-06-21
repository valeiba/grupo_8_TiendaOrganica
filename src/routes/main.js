const express = require("express");
const router = express.Router();
const controller = require("../controllers/main");

router.get("/", controller.home);
router.get("/productcart", controller.productCart);

module.exports = router;
