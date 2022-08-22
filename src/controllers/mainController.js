const db = require("../database/models");

const home = async (req, res) => {
  try {
    const products = await db.Product.findAll({
      where: {
        on_sale: 1,
      },
    });
    return res.render("index", {
      products,
    });
  } catch (error) {
    return console.log(error);
  }
};
const about = async (req, res) => {
  return res.render("about");
};
const faqs = async (req, res) => {
  return res.render("faqs");
};

module.exports = { home, about, faqs };
