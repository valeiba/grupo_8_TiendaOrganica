module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
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
    const Role = sequelize.define(alias, cols, config); 

    Role.associate = function (models) {
        Role.belongsTo(models.User, { 
            as: "users",
            foreignKey: 'role_id'
        })
    }

    return Role
};