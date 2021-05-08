'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pixel_Categories', [

        { name: 'Review',  createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { name: 'Walkthrough',  createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { name: 'Opinion',  createdAt: "2021-01-01", updatedAt: "2021-01-01" },
        { name: 'News',  createdAt: "2021-01-01", updatedAt: "2021-01-01" },

    ], {});
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Pixel_Categories', null, {});
  }
};
