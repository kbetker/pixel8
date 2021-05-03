'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Comments = sequelize.define('Pixel_Comments', {
    pixel_story_id: DataTypes.INTEGER,
    pixel_user_id: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Pixel_Comments.associate = function(models) {
    // associations can be defined here
  };
  return Pixel_Comments;
};