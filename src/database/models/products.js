module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
       // category_id:{
          //  type:dataTypes.BIGINT(10)
       // }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    // Product.associate = function (models) {
    //     Product.belongsToMany(models.user, { 
    //         as: "users",
    //         through: 'shoppingCart',
    //         foreignKey: 'product_id',
    //         otherKey: 'user_id',
    //         timestamps: false
    //     })
    //     Product.hasMany(models.category,{
    //         as:'categories',
    //         foreignKey:'category_id'
    //     })
    // }

    return Product
};