'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Appointments', [
      {userId: 1, photographerId: 6, date: '2021-11-28', hours: 2, createdAt: new Date(), updatedAt:new Date()},
      {userId: 1, photographerId: 7, date: '2021-12-28', hours: 4, createdAt: new Date(), updatedAt:new Date()},
      {userId: 2, photographerId: 1, date: '2021-12-14', hours: 2, createdAt: new Date(), updatedAt:new Date()},
      {userId: 1, photographerId: 9, date: '2021-11-24', hours: 6, createdAt: new Date(), updatedAt:new Date()},
      {userId: 2, photographerId: 10, date: '2021-12-14', hours: 2, createdAt: new Date(), updatedAt:new Date()},
      {userId: 2, photographerId: 11, date: '2021-12-14', hours: 2, createdAt: new Date(), updatedAt:new Date()},
      {userId: 1, photographerId: 8, date: '2021-11-20', hours: 1, createdAt: new Date(), updatedAt:new Date()},
      {userId: 2, photographerId: 1, date: '2021-12-08', hours: 2, createdAt: new Date(), updatedAt:new Date()},
      {userId: 4, photographerId: 1, date: '2021-12-01', hours: 1, createdAt: new Date(), updatedAt:new Date()},
      {userId: 5, photographerId: 1, date: '2021-12-22', hours: 1, createdAt: new Date(), updatedAt:new Date()},
      {userId: 6, photographerId: 6, date: '2021-11-29', hours: 3, createdAt: new Date(), updatedAt:new Date()},
      {userId: 7, photographerId: 6, date: '2021-11-22', hours: 2, createdAt: new Date(), updatedAt:new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Appointments', null, {});
  }
};
