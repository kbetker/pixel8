'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Pixel_Likes', [
        { pixelUserId:  1, pixelStoryId: 82 , createdAt: new Date(), updatedAt: new Date()},
        { pixelUserId: 1, pixelStoryId: 83 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 1, pixelStoryId: 84 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 1, pixelStoryId: 85 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 1, pixelStoryId: 86 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 2, pixelStoryId: 84 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 5, pixelStoryId: 84 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 3, pixelStoryId: 82 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 3, pixelStoryId: 81 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 4, pixelStoryId: 82 , createdAt: new Date(), updatedAt: new Date() },
        { pixelUserId: 6, pixelStoryId: 85 , createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Pixel_Likes', null, {});
  }
};
