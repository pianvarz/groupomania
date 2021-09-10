'use strict'
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Post, { foreignKey: 'userId' })
        }
        // removeAccount() {  // Removes account and stored the email for signup
        //     return this.update({
        //         deleted: true,
        //         email: 'deleted-user${this.id}@groupomania.com',
        //         imageUrl: null,
        //         firstName: 'User',
        //         lastName: 'Deleted'
        //     })
        // }   
    }
        
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: DataTypes.STRING,
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        adminAccount: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    { sequelize, modelName: 'User' })
    
    return User
    console.log("User init")
}