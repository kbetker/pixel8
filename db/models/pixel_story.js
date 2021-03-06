'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pixel_Story = sequelize.define('Pixel_Story', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    authorId: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    viewCount: DataTypes.INTEGER
  }, {});
  Pixel_Story.associate = function (models) {
    // associations can be defined here
    // const likeMap = { // User -> User, through Follow as following
    //   through: 'Pixel_Likes',
    //   otherKey: 'pixelUserId',
    //   foreignKey:'pixelStoryId',
    //   as: "likes"
    // }

    // Pixel_Story.belongsToMany(models.Pixel_User, likeMap)
    Pixel_Story.hasMany(models.Pixel_Comment, { foreignKey: 'pixelStoryId', onDelete: 'CASCADE', hooks: 'true' });
    Pixel_Story.hasMany(models.Pixel_Like, { foreignKey: 'pixelStoryId', onDelete: 'CASCADE', hooks: 'true' });
    Pixel_Story.belongsTo(models.Pixel_Category, { foreignKey: "categoryId" });
    Pixel_Story.belongsTo(models.Pixel_User, { foreignKey: "authorId" });

  };
  return Pixel_Story;
};
