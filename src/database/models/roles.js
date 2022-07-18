module.exports = (sequelize, dataTypes) => {
    let alias = 'Roles';
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
        tableName: "roles",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Role = sequelize.define(alias, cols, config); 

     Role.associate = function (models) {
        Role.hasMany(models.User, { 
             as: "users",
             foreignKey: 'role_id'
         })
     }

    return Role
};