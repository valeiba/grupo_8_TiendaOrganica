const db = require("../../database/models");
const {Category} = db;

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    const totalCategory= await Category.count();
    return res.json({
      meta: {
          status: 200,
          total: categories.length,
          url: "api/categories/all"
      },
      data: categories,
     totalCategory
    })
  } catch (error) {
    return console.log(error)
  }
};

const getOneCategory = async (req, res) => {
  try {
    const {id} = req.params;
    const category = await Category.findByPk(id);
    return res.json({
      meta: {
          status: 200,
          url: "api/categories/:id"
      },
      data: category
    })
  } catch (error) {
    return console.log(error);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    return res.json({
      meta: {
          status: 200,
          url: "api/categories/create"
      },
      data: newCategory
    })
  } catch (error) {
    return console.log(error);
  }
};

const dropCategory = async (req, res) => {
  try {
    await Category.destroy({
      truncate: true
    });
    return res.json({
      meta: {
        status: 200,
        url: "api/categories/delete",
        message: "Table categories deleted",
      },
      data: null,
    });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {getAllCategories, getOneCategory, createCategory, dropCategory};
