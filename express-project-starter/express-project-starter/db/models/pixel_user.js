'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Pixel_User = sequelize.define('Pixel_User', {
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      }
    }
  });
  Pixel_User.associate = function (models) {
    // associations can be defined here

    const columnMappingOne = { // User -> User, through Follow as follower
      through: 'Pixel_Followers',
      otherKey: 'pixel_following_id',
      foreignKey: 'pixel_follower_id',
      as: 'followings'
    }
    const columnMappingTwo = { // User -> User, through Follow as following
      through: 'Pixel_Followers',
      otherKey: 'pixel_follower_id',
      foreignKey: 'pixel_following_id',
      as: 'followers'
    }

    const likeMap = { // User -> User, through Follow as following
      through: 'Pixel_Likes',
      otherKey: 'pixel_story_id',
      foreignKey: 'pixel_user_id'
    }

    const commentMap = { // User -> User, through Follow as following
      through: 'Pixel_Comments',
      otherKey: 'pixel_story_id',
      foreignKey: 'pixel_user_id'
    }

    Pixel_User.belongsToMany(models.Pixel_Story, commentMap);
    Pixel_User.belongsToMany(models.Pixel_Story, likeMap)
    Pixel_User.hasMany(models.Pixel_Story, { foreignKey: "author_id" });
    Pixel_User.belongsToMany(models.Pixel_User, columnMappingOne);
    Pixel_User.belongsToMany(models.Pixel_User, columnMappingTwo);

  };
  return Pixel_User;
};
