const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/avatars");
  },
  filename: (req, file, cb) => {
    const {firstName, lastName} = req.body;
    const fileName = `${firstName}${lastName}_${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const uploadFile = multer({storage});

module.exports = uploadFile;