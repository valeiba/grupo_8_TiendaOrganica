module.exports = (sequelize, dataTypes) => {
  let alias = "User";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    underscored: true,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = function (models) {
    User.belongsToMany(models.Product, {
      as: "products",
      through: "shopping_cart",
      foreignKey: "user_id",
      otherKey: "product_id",
    });
    User.belongsTo(models.Role, {
      as: "roles",
      foreignKey: "role_id",
    });
  };

  return User;
};
