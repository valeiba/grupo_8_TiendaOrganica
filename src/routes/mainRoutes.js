const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.get("/", controller.home);
router.get("/about", controller.about);
router.get("/faqs", controller.faqs);
router.get("/contact", controller.contact);

module.exports = router;
