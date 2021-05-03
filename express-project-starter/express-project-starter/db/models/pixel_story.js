'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Story = sequelize.define('Pixel_Story', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    summary: DataTypes.STRING,
    author_id: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    image_url: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    viewCount: DataTypes.INTEGER
  }, {});
  Pixel_Story.associate = function(models) {
    // associations can be defined here
    Pixel_Story.belongsTo(models.Pixel_Category, {foreignKey: "category_id"});
  };
  return Pixel_Story;
};
