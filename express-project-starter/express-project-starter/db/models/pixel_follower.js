'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Follower = sequelize.define('Pixel_Follower', {
    pixel_following_id: DataTypes.INTEGER,
    pixel_follower_id: DataTypes.INTEGER
  }, {});
  Pixel_Follower.associate = function(models) {
    // associations can be defined here
    //Pixel_Follower.belongsTo(models.Pixel_User, {foreignKey: 'pixel_following_id'});
    //Pixel_Follower.belongsTo(models.Pixel_User, {foreignKey: 'pixel_follower_id'});
    //Pixel_User.belongsToMany(models.Pixel_User, {foreignKey: 'id', otherKey: 'id', through: "pixel_followers"});
  };
  return Pixel_Follower;
};
