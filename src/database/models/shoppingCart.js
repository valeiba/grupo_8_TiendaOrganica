module.exports = (sequelize, dataTypes) => {
    let alias = 'ShoppingCarts';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        product_id: {
            type: dataTypes.INTERGER,
            references:{model:'Product', key:'id'}
           
        },
        user_id: {
            type: dataTypes.INTERGER,
            references:{model:'User', key:'id'}
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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const ShoppingCart = sequelize.define(alias, cols, config); 

    // ShoppingCart.associate = function (models) {
    //     ShoppingCart.belongsTo(models.Product, { 
    //         foreignKey: 'product_id',
    //         timestamps: false
    //     })
    //     Product.belongsTo(models.User,{
    //         foreignKey:'user_id'
    //     })
    // }

    return ShoppingCart
};