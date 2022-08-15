const db = require("../database/models");

const home = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      where: {
        on_sale: 1
      }
    })
    console.log(products)
    return res.render("index", {
      products
    });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {home};
