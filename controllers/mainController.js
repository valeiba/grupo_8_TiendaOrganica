const controller = {
  home: (req, res) => {
    res.render('index')
  },
  productCart: (req, res) => {
    res.render('productCart')
  },
};

module.exports = controller;
