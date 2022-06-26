const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const { validateRegister, validateLogin } = require("../middlewares/auth.js");
const {body}= require ('express-validator');
const validations=[
    body('name').notEmpty().withMessage('tiene que ingresar un nombre'),
    body('lastname').notEmpty().withMessage('tiene que ingresar un apellido'),
    body('email').notEmpty().withMessage('tiene que ingresar un email').bail().isEmail().withMessage('debes escribir un formato de correo valido'),
    body('passWord').notEmpty().withMessage('tiene que ingresar una contraseña')
]

router.get("/register", controller.register);
router.post("/register", validations, controller.processRegister)
router.get("/login", controller.login);
router.post("/login", validateLogin, controller.processLogin);

module.exports = router;
