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
      pixel_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Pixel_Users"}
      },
      pixel_story_id: {
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
