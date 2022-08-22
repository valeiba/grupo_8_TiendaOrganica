module.exports = (sequelize, dataTypes) => {
  let alias = "ShoppingCart";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },
  };

  let config = {
    underscored: true,
    tableName: "shopping_cart",
  };

  const ShoppingCart = sequelize.define(alias, cols, config);
  ShoppingCart.associate = function (models) {
    ShoppingCart.belongsTo(models.Product, {
      foreignKey: "product_id",
    });
    ShoppingCart.belongsTo(models.User, {
      foreignKey: "user_id",
    });
  };

  return ShoppingCart;
};
