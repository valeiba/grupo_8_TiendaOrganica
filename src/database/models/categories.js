module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
     
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Category = sequelize.define(alias, cols, config); 

    // Category.associate = function (models) {
    //     Category.belongsTo(models.Product, { 
    //         as: "products",
    //         foreignKey: 'category_id'
    //     })
    // }

    return Category
};