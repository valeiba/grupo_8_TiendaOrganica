const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/products");
  },
  filename: (req, file, cb) => {
    const {name} = req.body;
    const fileName = `${name}_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadProduct = multer({storage});

module.exports = uploadProduct;