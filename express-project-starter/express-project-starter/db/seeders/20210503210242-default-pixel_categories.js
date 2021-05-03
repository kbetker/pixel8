'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pixel_Categories', [

        { name: 'Review',  created_at: "2000-01-01", updated_at: "2000-01-01" },
        { name: 'Walkthrough',  created_at: "2000-01-01", updated_at: "2000-01-01" },
        { name: 'Opinion',  created_at: "2000-01-01", updated_at: "2000-01-01" },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Pixel_Categories', null, {});
  }
};
