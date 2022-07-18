const { products } = require("../../controllers/productsController");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(4,2),
            allowNull: false
        },
        presentation: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        available:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        category_id:{
           type:dataTypes.INTEGER
        }
    };
    let config = {
        tableName:"products",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

     Product.associate = function (models) {
        Product.belongsToMany(models.user, { 
            as: "users",
             through: 'shoppingCart',
            foreignKey: 'product_id',
             otherKey: 'user_id',
             timestamps: false
        })
          Product.belongsTo(models.category,{
             as:'categories',
             foreignKey:'category_id'
         })
     }

    return Product
};