//const bcryptjs = require("bcryptjs");
//const {validationResult} = require("express-validator");
const db = require("../database/models");
//const { Product } = db;

const controller ={
  //listar
  products: function(req,res) {
     db.Product.findAll()
      .then(function(products){
        res.render('index',{products:products})

      })
  },
  //detalle
  detail: function(req,res){
     db.Product.findByPk(req.params.id)
     .then(function(product){
      res.render("products/detail",{product:product})
     })
  },
  //crear
  create: function(req,res){
    res.render("products/create");
  },
  store: function(req,res){
    db.Product.create({
        name: req.body.name,
        price:req.body.price,
        presentation: req.body.presentation,
        available:req.body.available


    });
   res.redirect('/')
  },
  //editar
  edit: function(req,res){
    db.Product.findByPk(req.params.id)
    .then(function(productToEdit){
      res.render("products/edit",{productToEdit:productToEdit});
    })
  },
 update: function(req,res){
  db.Product.update({
    name: req.body.name,
    price:req.body.price,
    presentation: req.body.presentation,
    available:req.body.available
  },{
    where:{
   id: req.params.id
    }
  })
  res.redirect("products/edit/" + req.params.id)
 },
 //eliminar
 delete: function(req,res){
  db.Product.findByPk(req.params.id)
  .then(function(product){
    res.render("products/delete",{product:product});
  })
 },
 destroy: function(req,res){
  db.Product.destroy({
    where:{
      id: req.params.id
    }
  })
  res.redirect("/")
 } 
 
};
module.exports=controller;
