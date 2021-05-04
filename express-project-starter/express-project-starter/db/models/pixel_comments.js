'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Comments = sequelize.define('Pixel_Comments', {
    pixelStoryId: DataTypes.INTEGER,
    pixelUserId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Pixel_Comments.associate = function(models) {
    // associations can be defined here
  };
  return Pixel_Comments;
};
