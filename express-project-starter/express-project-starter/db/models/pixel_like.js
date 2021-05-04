'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Like = sequelize.define('Pixel_Like', {
    pixelUserId: DataTypes.INTEGER,
    pixelStoryId: DataTypes.INTEGER
  }, {});
  Pixel_Like.associate = function(models) {
    // associations can be defined here

  };
  return Pixel_Like;
};
