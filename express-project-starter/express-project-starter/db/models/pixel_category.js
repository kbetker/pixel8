'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Category = sequelize.define('Pixel_Category', {
    name: DataTypes.STRING
  }, {});
  Pixel_Category.associate = function(models) {
    // associations can be defined here
    Pixel_Category.hasMany(models.Pixel_Story, {foreignKey: "category_id"});
  };
  return Pixel_Category;
};
