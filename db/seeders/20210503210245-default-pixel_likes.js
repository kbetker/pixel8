'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pixel_Likes', [
        { pixelUserId:  1, pixelStoryId: 2 , createdAt: new Date(), updatedAt: new Date()},
        { pixelUserId: 1, pixelStoryId: 3 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 1, pixelStoryId: 4 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 1, pixelStoryId: 5 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 1, pixelStoryId: 6 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 2, pixelStoryId: 4 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 5, pixelStoryId: 4 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 3, pixelStoryId: 2 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 3, pixelStoryId: 1 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 4, pixelStoryId: 2 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 6, pixelStoryId: 5 , createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pixel_Likes', null, {});
  }
};
