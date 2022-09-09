const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");

const register = (req, res) => {
  return res.render("users/register");
};

const processRegister = async (req, res) => {
  try {
    const inputFieldsValidation = validationResult(req);

    if (inputFieldsValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: inputFieldsValidation.mapped(),
        oldData: req.body,
      });
    }

    let userAlreadyExists = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });

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

    let data = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      // guarda en la propiedad avatar el nombre de la imagen o usuario genérico
      avatar: req.file?.filename || "default.webp",
      // rol: "user" por defecto (sin privilegios de admin)
      role_id: 2,
    };

    await db.User.create(data, {
      include: ["roles"],
    });

    return res.redirect("/users/login");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    return res.render("users/login");
  } catch (error) {
    return console.log(error);
  }
};
//? LOGIN *****************************************************************
const processLogin = async (req, res) => {
  try {
    const userToLogin = await db.User.findOne({
      where: { email: req.body.email },
    });
    if (userToLogin) {
      let passwordIsCorrect = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );

      if (passwordIsCorrect) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin; // ? GUARDAR USUARIO

        // if user checks "Remember me", store Email in cookies
        // used in userLoggedMiddleware
        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 30 });
        }

        return res.redirect("/");
      }

      return res.render("users/login", {
        errors: {
          password: {
            msg: "Contraseña incorrecta. Intentá de nuevo.",
          },
        },
        oldData: req.body,
      });
    }

    if (req.body.email == "") {
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Ingresá un Email.",
          },
        },
        oldData: req.body,
      });
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "El Email no está registrado.",
        },
      },
      oldData: req.body,
    });
  } catch (error) {
    return console.log(error);
  }
};

//? ruta profile el cual le mandamos el usuario logueado
const profile = async (req, res) => {
  try {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  } catch (error) {
    return console.log(error);
  }
};

const edit = async (req, res) => {
  try {
    return res.render("users/edit", {
      oldData: req.session.userLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

const editProfile = async (req, res) => {
  try {
  } catch (error) {
    return console.log(error);
  }
};

const shoppingCart = async (req, res) => {
  try {
    return res.render("users/shoppingCart", {});
  } catch (error) {
    return console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
const admin = async (req, res) => {
  return res.render("users/admin");
};

module.exports = {
  register,
  processRegister,
  login,
  processLogin,
  profile,
  edit,
  editProfile,
  shoppingCart,
  logout,
  admin,
};
