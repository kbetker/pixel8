'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Like = sequelize.define('Pixel_Like', {
    pixelUserId: DataTypes.INTEGER,
    pixelStoryId: DataTypes.INTEGER
  }, {});
  Pixel_Like.associate = function(models) {
  Pixel_Like.belongsTo(models.Pixel_User, { foreignKey: "pixelUserId" })
  Pixel_Like.belongsTo(models.Pixel_Story, { foreignKey: "pixelStoryId" })

  };
  return Pixel_Like;
};
