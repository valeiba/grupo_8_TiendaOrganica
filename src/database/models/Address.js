module.exports = (sequelize, dataTypes) => {
  let alias = "Address";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    postal_code: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    }
  };

  let config = {
    underscored: true,
  };

  const Address = sequelize.define(alias, cols, config);

  Address.associate = function (models) {
    Address.belongsTo(models.User, {
      as: "users",
      foreignKey: "user_id",
    });
  };

  return Address;
};
