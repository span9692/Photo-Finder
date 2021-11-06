'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Appointments', [
      {userId: 1, photographerId: 1, startTime: '2021-03-27 08:30:00', endTime: '2021-03-27 09:30:00', createdAt: new Date(), updatedAt:new Date()}
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
