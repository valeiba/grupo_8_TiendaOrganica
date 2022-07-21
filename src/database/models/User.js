module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        firstName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password:{
            type: dataTypes.STRING,
            allowNull: false
        },
         role_id:{
             type:dataTypes.INTEGER
         }
    };
    let config = {
       timestamps:false
    }

    const User = sequelize.define(alias, cols, config); 

     User.associate = function (models) {
         User.belongsToMany(models.Products, { 
             as: "products",
             through: 'shoppingCart',
             foreignKey: 'user_id',
             otherKey: 'product_id',
             timestamps: false
         })
         User.belongsTo(models.Roles,{
             as:'roles',
            foreignKey:'role_id'
         })
     }

    return User
};