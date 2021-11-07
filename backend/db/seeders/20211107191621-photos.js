'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Photos', [
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636312554/wedding1_x42tzm.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Photos', null, {});
  }
};
