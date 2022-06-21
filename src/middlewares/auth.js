const bcrypt = require('bcrypt');
// const { User } = require('../database');

const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, "/../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const validateRegister = async (req, res, next) => {
  if (!!!req.body.email) {
    return res.status(200).json({ error: true, message: 'Email es requerido' });
  }
  // Validate if email is already in use
  const isEmailExist = users.find((user) => user.email === req.body.email);
  // const isEmailExist = await User.findOne({
  //   where: { email: req.body.email },
  // });

  if (isEmailExist) {
    return res.status(200).json({ error: true, message: 'Email ya registrado' });
  }

  next();
};

const validateLogin = async (req, res, next) => {
  // Find user in database
  // const user = await User.findOne({ where: { email: req.body.email } });
  const user = users.find((user) => user.email === req.body.email);

  let validPassword = false;
  if (user) {
    validPassword = await bcrypt.compare(req.body.password, user.password);
  }

  if (!user || !validPassword) {
    return res.status(200).json({
      error: true,
      message: 'Credenciales no validas... Por favor verifique los datos',
    });
  }

  req.user = user; // save in req object the user found
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
};
