const validateAdminMiddleware = (req, res, next) => {
  // si el rol es distinto de 1 "Admin"
  if (req.session.userLogged.role_id != 1) {
    res.redirect('/')
  }
  next();
};

module.exports = validateAdminMiddleware;
