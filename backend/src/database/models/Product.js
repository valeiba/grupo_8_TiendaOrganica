module.exports = (sequelize, dataTypes) => {
  let alias = "Product";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    presentation: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    on_sale: {
      type: dataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    image: {
      type: dataTypes.STRING,
      allowNull: false,
      defaultValue: "default.webp",
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    underscored: true,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsToMany(models.User, {
      as: "users",
      through: "shopping_cart",
      foreignKey: "product_id",
      otherKey: "user_id",
    });
    Product.belongsTo(models.Category, {
      as: "categories",
      foreignKey: "category_id",
    });
  };

  return Product;
};
