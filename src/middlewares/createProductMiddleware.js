const path = require("path");
const {body} = require("express-validator");

module.exports = [
  body("name").notEmpty().isLength({min:5}).withMessage("El nombre del producto es obligatorio"),
  body("price").notEmpty().withMessage("Por favor ingresar precio del producto"),
  body("presentation").notEmpty().withMessage("Por favor ingresar la presentación del producto"),
  body("available").notEmpty().withMessage("Por favor ingresar si el producto esta disponible"),
  body("description").isLength({min:20})
    .withMessage("La descripción debe tener al menos 20 caracteres"),
  body("category").notEmpty().withMessage("Por favor debe seleccionar una categoria"),
  body("image").custom((value, {req}) => {
    
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
