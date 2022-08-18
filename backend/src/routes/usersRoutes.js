const express = require("express");
const router = express.Router();

const uploadFile = require("../middlewares/multerMiddleware");
const validateAdminMiddleware = require("../middlewares/validateAdminMiddleware");
const validateRegisterMiddleware = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const {register, processRegister, listAll, listUser, login, processLogin, profile, shoppingCart, logout, admin} = require("../controllers/usersController");

router.get("/register", guestMiddleware, register);
router.post("/register", uploadFile.single("avatar"), validateRegisterMiddleware, processRegister);
router.get("/login", guestMiddleware, login);
router.post("/login", processLogin);
router.get("/profile", authMiddleware, profile);
router.get("/shopping-cart", authMiddleware, shoppingCart);
router.get("/logout", logout);
router.get("/admin", authMiddleware, validateAdminMiddleware, admin);
module.exports = router;
