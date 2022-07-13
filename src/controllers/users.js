// const { User } = require('../database');

const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "/../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const controller = {
  register: (req, res) => {
    res.render("./users/register");
  },
  createUser: async (req, res) => {
    const { name, lastname, email, password, role } = req.body;
    // hash password
    const salt = await bcrypt.genSalt(10);
    const passwordBcrypt = await bcrypt.hash(password.trim(), salt);

    try {
      // const saveUser = await User.create({
      //   name: req.body.name.trim(),
      //   lastname: req.body.lastname.trim(),
      //   email: req.body.email.trim(),
      //   password,
      //   role: req.body.role,
      // });

      let newUser = {
        role,
        name,
        lastname,
        email,
        password: passwordBcrypt,
      };

      users.push(newUser);

      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
      res.send("update");
    } catch (error) {
      // const errors = error.errors.map((err) => err.message);
      // res.status(200).json({
      //   error: true,
      //   message: "Los datos enviados son invalidos",
      //   errors,
      // });
      console.error(error);
    }
  },
  login: (req, res) => {
    res.render("./users/login");
  },
  processLogin: async (req, res) => {
    console.log(req.body);

    try {
      const { user } = req;
      // Create token
      const token = jwt.sign(
        {
          email: user.email,
          role: user.role,
          id: user.id,
        },
        process.env.TOKEN_SECRET
      );

      const { id, name, lastname, email, role } = user;

      res.json({
        error: false,
        message: "Usuario logueado correctamente",
        user: { id, name, lastname, email, role },
        token,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error || "Error al devolver el usuario logueado" });
    }
  },
  profile: (req, res) => {
    res.render("./users/profile");
  },
  getUser: (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    res.status(200).json({ user });
  },
};

module.exports = controller;
