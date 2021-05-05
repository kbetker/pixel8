'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Comment = sequelize.define('Pixel_Comment', {
    pixelStoryId: DataTypes.INTEGER,
    pixelUserId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Pixel_Comment.associate = function(models) {
    // associations can be defined here
    Pixel_Comment.belongsTo(models.Pixel_Story, {foreignKey:  'pixelStoryId'});
    Pixel_Comment.belongsTo(models.Pixel_User, {foreignKey:  'pixelUserId'});
  };
  return Pixel_Comment;
};
