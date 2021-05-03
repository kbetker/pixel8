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
    const likeMap = { // User -> User, through Follow as following
      through: 'Pixel_Likes',
      otherKey: 'pixel_user_id',
      foreignKey:'pixel_story_id'
    }

    const commentMap = { // User -> User, through Follow as following
      through: 'Pixel_Comments',
      otherKey: 'pixel_user_id',
      foreignKey:'pixel_story_id'
    }

    Pixel_Story.belongsToMany(models.Pixel_User, likeMap)
    Pixel_Story.belongsToMany(models.Pixel_User, commentMap);
    Pixel_Story.belongsTo(models.Pixel_Category, {foreignKey: "category_id"});
    Pixel_Story.belongsTo(models.Pixel_User, {foreignKey: "author_id"});

  };
  return Pixel_Story;
};
