const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller = {
 // Detail - Detail from one product
 
  detail: (req, res) => {
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
