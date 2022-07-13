const bcryptjs = require("bcryptjs");
const User = require("../database/models/UserModel");
const {validationResult} = require("express-validator");

const controller = {
  register: (req, res) => {
    return res.render("users/register");
  },

  processRegister: async (req, res) => {
    const inputFieldsValidation = validationResult(req);

    if (inputFieldsValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: inputFieldsValidation.mapped(),
        oldData: req.body,
      });
    }

    let userAlreadyExists = await User.findByField("email", req.body.email);

    if (userAlreadyExists) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "El Email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    let userData = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      // guarda en la propiedad avatar el nombre de la imagen o usuario genérico
      avatar: req.file?.filename || "default.webp",
    };

    // guarda todos los campos del formulario en la variable user
    let user = await User.create(userData);

    return res.redirect("login");
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  processLogin: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);
    if (userToLogin) {
      let passwordIsOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (passwordIsOk) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        // si el usuario clickea "Recordar mi usuario" guarda el campo Email
        // se utiliza en userLoggedMiddleware
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, {maxAge: 1000 * 30});
        }
        return res.redirect("/users/profile");
      }
      return res.render("users/login", {
        errors: {
          password: {
            msg: "La contraseña es incorrecta",
          },
        },
        oldData: req.body,
      });
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "El Email no está registrado",
        },
      },
      oldData: req.body,
    });
  },

  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = controller;
