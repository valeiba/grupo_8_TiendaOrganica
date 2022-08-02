const db = require("../database/models");

const home = async (req, res) => {
  try {
    const products = await db.Product.findAll({
    })
    return res.render("index", {
      products
    });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {home};
