module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';
    let cols = {
        id: {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
     
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
        
    };
    let config = {
        tableName:"categories",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Category = sequelize.define(alias, cols, config); 

     Category.associate = function (models) {
         Category.hasMany(models.Product, { 
             as: "products",
             foreignKey: 'category_id'
         })
     }

    return Category
};