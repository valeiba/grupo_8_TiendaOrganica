
// Global middleware (app)
const db = require("../database/models");

const userLoggedMiddleware = (req, res, next) => {
  res.locals.userIsLogged = false;

  // 'userEmail' comes from processLogin method in usersController
  let emailInCookie = req.cookies.userEmail;
  // let userFromCookie = db.User.findOne({
  //       where: {
  //         email: emailInCookie
  //       }
  //     }).then(user => {
  //       return user
  //     });

  // if (userFromCookie) {
  //   req.session.userLogged = userFromCookie;
  // }

  if (req.session && req.session.userLogged) {
    res.locals.userIsLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};

module.exports = userLoggedMiddleware;