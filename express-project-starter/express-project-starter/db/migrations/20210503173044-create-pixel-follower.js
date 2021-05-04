'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pixel_Followers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pixelFollowingId: {
        type: Sequelize.INTEGER,
        references: {model: "Pixel_Users"},
        allowNull: false
      },
      pixelFollowerId: {
        type: Sequelize.INTEGER,
        references: {model: "Pixel_Users"},
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
    return queryInterface.dropTable('Pixel_Followers');
  }
};
