'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pixel_Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pixelUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Pixel_Users"}
      },
      pixelStoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Pixel_Stories"}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pixel_Likes');
  }
};
