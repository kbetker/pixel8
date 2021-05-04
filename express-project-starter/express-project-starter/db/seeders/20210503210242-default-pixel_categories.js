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
      return queryInterface.bulkInsert('Pixel_Categories', [
        {name: 'Walkthrough', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Review', createdAt: new Date(), updatedAt: new Date()},
        {name: 'Opinion', createdAt: new Date(), updatedAt: new Date()},
        {name: 'News', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
      return queryInterface.bulkDelete('Pixel_Categories', null, {});
  }
};
