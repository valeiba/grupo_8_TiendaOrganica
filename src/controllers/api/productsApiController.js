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
                    data: product
                }
                res.json(respuesta);
            });
    },
    'Last': (req, res) => {
        db.Product.findAll({
           
            order : [
                ['created_at', 'DESC']
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