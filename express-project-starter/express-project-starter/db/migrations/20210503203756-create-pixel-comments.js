'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pixel_Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pixel_story_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Pixel_Stories"}
      },
      pixel_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Pixel_Users"}
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
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
    return queryInterface.dropTable('Pixel_Comments');
  }
};
