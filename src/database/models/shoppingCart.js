module.exports = (sequelize, dataTypes) => {
    let alias = 'ShoppingCarts';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        quantity: {
            type: dataTypes.BIGINT(50),
            allowNull: false
        },
        total:{
            type: dataTypes.DECIMAL(4,2),
            allowNull: false
        }
    };
    let config = {
        tableName: "shoppingCart",
        timestamps: false
    }
    const ShoppingCart = sequelize.define(alias, cols, config); 

 

    return ShoppingCart
};