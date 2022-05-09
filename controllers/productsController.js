const controller = {
  productDetail: (req, res) => {
    res.render('./products/productDetail')
  },
  addProduct: (req, res) => {
    res.render('./products/addProduct')
  },
  editProduct: (req, res) => {
    res.render('./products/editProduct')
  }
};

module.exports = controller;
