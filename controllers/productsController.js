const controller = {
  productCart: (req, res) => {
    res.render('productCart')
  },
  productDetail: (req, res) => {
    res.render('productDetail')
  }
};

module.exports = controller;
