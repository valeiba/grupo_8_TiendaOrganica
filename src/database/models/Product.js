

module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        presentation: {
            type: dataTypes.STRING,
            allowNull: false
        },
        available:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        image:{
            type:dataTypes.BLOB,
            allowNull:false

        },
        category_id:{
           type:dataTypes.INTEGER,
           allowNull:false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

     Product.associate = function (models) {
        Product.belongsToMany(models.Users, { 
            as: "users",
             through: 'shoppingCart',
            foreignKey: 'product_id',
             otherKey: 'user_id',
             timestamps: false
        })
          Product.belongsTo(models.Categories,{
             as:'categories',
             foreignKey:'category_id'
         })
     }

    return Product
};