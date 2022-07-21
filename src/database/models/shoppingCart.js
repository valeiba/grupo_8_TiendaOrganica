module.exports = (sequelize, dataTypes) => {
    let alias = 'ShoppingCarts';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total:{
            type: dataTypes.DECIMAL,
            allowNull: false
        }
    };
    let config = {
        timestamps: false
    }
    const ShoppingCart = sequelize.define(alias, cols, config); 
    ShoppingCart.associate = function (models) {
        ShoppingCart.belongsTo(models.Products, { 
            foreignKey: 'product_id',
            timestamps: false
        })
        ShoppingCart.belongsTo(models.Users,{
            foreignKey:'user_id'
        })
    }
 

    return ShoppingCart
};