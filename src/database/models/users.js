module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        firstName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
         role_id:{
             type:dataTypes.INTERGER
         }
    };
    let config = {
        tableName:"users",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    // User.associate = function (models) {
    //     User.belongsToMany(models.Product, { 
    //         as: "products",
    //         through: 'shoppingCart',
    //         foreignKey: 'user_id',
    //         otherKey: 'product_id',
    //         timestamps: false
    //     })
    //     Product.belongsTo(models.Role,{
    //         as:'roles',
    //         foreignKey:'role_id'
    //     })
    // }

    return User
};