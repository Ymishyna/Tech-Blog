const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {
    // set up method to check password 
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

// define table columns and configuration
User.init(
    {
        // define an id column
        id: {
            type: DataTypes.INTEGER,
            // the same as in SQL "NOT NULL"
            allowNull: false,
            // this is the Primary Key
            primaryKey: true,
            // auto increment
            autoIncrement: true
        },
        // defining username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // defining password column 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;

            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // direct connection to our database
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of db table
        freezeTableName: true,
        // use underscores instead of camel-casing 
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;