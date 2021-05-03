'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Like = sequelize.define('Pixel_Like', {
    pixel_user_id: DataTypes.INTEGER,
    pixel_story_id: DataTypes.INTEGER
  }, {});
  Pixel_Like.associate = function(models) {
    // associations can be defined here
    
  };
  return Pixel_Like;
};
