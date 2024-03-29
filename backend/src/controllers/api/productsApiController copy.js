const path = require('path');
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const productsApiController = {
    'getAllProducts': (req, res) => {
        db.Product.findAll({
            include: ['categories'],
            
        })
       

        .then((products)=> {
            let respuesta = {
                meta: {
                    status : 200,
                   
                    
                    total: products.length,
                    
                    url: 'api/products/all'
                },
                data: products,
               detail: products.forEach((products) => {
                    products.dataValues.detail = `http://localhost:3001/api/products/${products.id}`;
                  })  
                
            }
                res.json(respuesta);
            })
    },
    'getOneProduct': (req, res) => {
        db.Product.findByPk(req.params.id,
            {
                include : ['categories']
            })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        
                        url: '/api/products/:id'
                    },
                    data: product,
                    imageProduct: product.dataValues.image = `http://localhost:3001/api/products/${product.image}`
                      
                }
                res.json(respuesta);
            });
    },
    'Last': (req, res) => {
        db.Product.findAll({
           
            order : [
                ['id', 'DESC']
            ]
        })
            .then((products) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        
                        url: '/api/products/last'
                    },
                    data: products
                }
                res.json(respuesta);
            });
    },
}
module.exports=productsApiController