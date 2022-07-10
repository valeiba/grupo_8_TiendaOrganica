const express = require("express");
const router = express.Router();
const controller = require("../controllers/users");
const { validateRegister, validateLogin } = require("../middlewares/auth.js");

router.get("/register", controller.register);
router.post("/register", validateRegister, controller.createUser);
router.get("/login", controller.login);
router.post("/login", validateLogin, controller.processLogin);
router.get("/profile", controller.profile);
router.get("/infoUser", controller.getUser);

module.exports = router;
