const express = require("express");
const router = express.Router();

const uploadFile = require("../middlewares/multerMiddleware");
const validateRegisterMiddleware = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const {register, processRegister, listAll, listUser, login, processLogin, profile, shoppingCart, logout} = require("../controllers/usersController");

router.get("/register", guestMiddleware, register);
router.post("/register", uploadFile.single("avatar"), validateRegisterMiddleware, processRegister);
// router.get("/all", listAll);
// router.get("/detail/:id", listUser);
router.get("/login", guestMiddleware, login);
router.post("/login", processLogin);
router.get("/profile", authMiddleware, profile);
router.get("/shopping-cart", authMiddleware, shoppingCart);
router.get("/logout", logout);

module.exports = router;
