'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Pixel_User = sequelize.define('Pixel_User', {
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, 8);
      },
      validPassword(password) {
        return bcrypt.compare(password, this.hashedPassword);
      }
    }
  });
  Pixel_User.associate = function (models) {
    // associations can be defined here

    const columnMappingOne = { // User -> User, through Follow as follower
      through: 'Pixel_Followers',
      otherKey: 'pixelFollowingId',
      foreignKey: 'pixelFollowerId',
      as: 'followings'
    }
    const columnMappingTwo = { // User -> User, through Follow as following
      through: 'Pixel_Followers',
      otherKey: 'pixelFollowerId',
      foreignKey: 'pixelFollowingId',
      as: 'followers'
    }

    // const likeMap = { // User -> User, through Follow as following
    //   through: 'Pixel_Likes',
    //   otherKey: 'pixelStoryId',
    //   foreignKey: 'pixelUserId',
    //   as: "likes"
    // }

    // Pixel_User.belongsToMany(models.Pixel_Story, likeMap)
    Pixel_User.hasMany(models.Pixel_Comment, { foreignKey: 'pixelUserId', onDelete: 'CASCADE', hooks: 'true' });
    Pixel_User.hasMany(models.Pixel_Like, { foreignKey: 'pixelUserId', onDelete: 'CASCADE', hooks: 'true' });
    Pixel_User.hasMany(models.Pixel_Story, { foreignKey: 'authorId', onDelete: 'CASCADE', hooks: 'true' });
    Pixel_User.belongsToMany(models.Pixel_User, columnMappingOne);
    Pixel_User.belongsToMany(models.Pixel_User, columnMappingTwo);

  };
  return Pixel_User;
};
