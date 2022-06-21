module.exports = (database, DataTypes) => {
  return database.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nombre es un campo requerido',
        },
        len: {
          args: [3, 50],
          msg: 'Nombre tiene que tener entre 3 y 50 caracteres.',
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Apellido es un campo requerido',
        },
        len: {
          args: [3, 50],
          msg: 'Apellido tiene que tener entre 3 y 50 caracteres.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'El email no es válido',
        },
        notEmpty: {
          args: true,
          msg: 'Email es un campo requerido',
        },
        len: {
          args: [3, 50],
          msg: 'Email tiene que tener entre 3 y 50 caracteres.',
        },
      },
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password es un campo requerido',
        },
      },
    },
    role: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Rol es un campo requerido',
        },
      },
    },
  });
};
