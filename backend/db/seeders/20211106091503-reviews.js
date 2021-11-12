'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {userId: 1, photographerId: 2, review:'very professional', createdAt: new Date(), updatedAt:new Date()},
      {userId: 2, photographerId: 1, review:'Nick was an amazing photographer! 10/10', createdAt: new Date(), updatedAt:new Date()},
      {userId: 3, photographerId: 1, review:'Wow! Amazing!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 4, photographerId: 1, review:'yo dudes lit', createdAt: new Date(), updatedAt:new Date()},
      {userId: 5, photographerId: 1, review:'Thank you!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 6, photographerId: 2, review:'love the photos..recommended!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 7, photographerId: 2, review:'Thank you! 10/10', createdAt: new Date(), updatedAt:new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
