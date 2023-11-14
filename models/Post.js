const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model { }

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  //   // Add the user_id field
  //   user_id: {
  //     references: {
  //       model: 'User', // This is a reference to another model
  //       key: 'id',     // This is the column name of the referenced model
  //     }
  //   }
  },
  {
    sequelize
  }
);

module.exports = Post;
