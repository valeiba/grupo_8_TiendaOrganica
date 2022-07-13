const express = require("express");
const router = express.Router();

const uploadFile = require("../middlewares/multerMiddleware");
const validateRegisterMiddleware = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const {register, processRegister, login, processLogin, profile, logout} = require("../controllers/usersController");

router.get("/register", guestMiddleware, register);
router.post("/register", uploadFile.single("avatar"), validateRegisterMiddleware, processRegister);
router.get("/login", guestMiddleware, login);
router.post("/login", processLogin);
router.get("/profile", authMiddleware, profile);
router.get("/logout", logout);

module.exports = router;
