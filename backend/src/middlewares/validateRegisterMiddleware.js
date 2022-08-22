const path = require("path");
const {body} = require("express-validator");

module.exports = [
  body("first_name").notEmpty().isLength({min: 2}).withMessage("Por favor completá tu nombre"),
  body("last_name").notEmpty().withMessage("Por favor completá tu apellido"),
  body("email")
    .notEmpty()
    .withMessage("Por favor completá tu correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Por favor revisá el formato de correo electrónico"),
  body("password").notEmpty().withMessage("Por favor completá tu contraseña"),
  body("mobile")
    .notEmpty()
    .withMessage("Por favor completá tu número de teléfono")
    .bail()
    .isLength({
      min: 7
    })
    .withMessage("El teléfono debe tener al menos 7 dígitos"),
  body("avatar").custom((value, {req}) => {
    // accesible from Multer (function "uploadFile")
    let acceptedFileExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    let file = req.file;
    if (typeof file === "undefined") {
      file = null;
    } else {
      let fileExtension = path.extname(file.originalname).toLocaleLowerCase();
      if (!acceptedFileExtensions.includes(fileExtension)) {
        throw new Error(`Por favor subí una imagen ${acceptedFileExtensions.join(", ")}`);
      }
    }
    return true;
  }),
];
