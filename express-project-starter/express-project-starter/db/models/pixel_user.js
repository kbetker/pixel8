'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_User = sequelize.define('Pixel_User', {
    full_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  Pixel_User.associate = function(models) {
    // associations can be defined here
    // Pixel_User.belongsToMany(models.Pixel_User, {foreignKey: 'id', otherKey: 'id', through: "pixel_followers"});
  };
  return Pixel_User;
};
