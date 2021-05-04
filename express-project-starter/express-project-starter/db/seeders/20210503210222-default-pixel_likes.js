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
        { pixel_user_id: "1", pixel_story_id: "2" },
        { pixel_user_id: "1", pixel_story_id: "3" },
        { pixel_user_id: "1", pixel_story_id: "4" },
        { pixel_user_id: "1", pixel_story_id: "5" },
        { pixel_user_id: "1", pixel_story_id: "6" },
        { pixel_user_id: "2", pixel_story_id: "4" },
        { pixel_user_id: "5", pixel_story_id: "4" },
        { pixel_user_id: "3", pixel_story_id: "2" },
        { pixel_user_id: "3", pixel_story_id: "1" },
        { pixel_user_id: "4", pixel_story_id: "2" },
        { pixel_user_id: "6", pixel_story_id: "5" },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
