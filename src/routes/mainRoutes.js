const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.get("/", controller.home);
router.get("/about-us", controller.about);
router.get("/faqs", controller.faqs);

module.exports = router;
