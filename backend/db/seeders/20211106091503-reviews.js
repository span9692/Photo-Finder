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
      {userId: 12, photographerId: 1, review:'Would 100% book again!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 14, photographerId: 1, review:'Photos taken by Nick were absolutely stunning! Thanks for the amazing work!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 4, photographerId: 2, review:'I have worked with Da in the past and he does a phenomenal job. He does his research on the best places to take photos and makes an effort to lighten the mood. The photos were amazing. We will be working with him again for our next event!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 16, photographerId: 2, review:'Best photographer everrrr', createdAt: new Date(), updatedAt:new Date()},
      {userId: 12, photographerId: 2, review:'Da\'s been our go-to photographer for years! He\'s thorough and really knows hot to set up the scene to capture the perfect moments. 5 stars on every criteria.', createdAt: new Date(), updatedAt:new Date()},
      {userId: 1, photographerId: 2, review:'NAISU', createdAt: new Date(), updatedAt:new Date()},
      {userId: 4, photographerId: 3, review:'Edward is very professional. I enjoyed his photos and his punctuality.', createdAt: new Date(), updatedAt:new Date()},
      {userId: 16, photographerId: 4, review:'Nice photos!!', createdAt: new Date(), updatedAt:new Date()},
      {userId: 1, photographerId: 4, review:'fantastic', createdAt: new Date(), updatedAt:new Date()},
      {userId: 3, photographerId: 5, review:'John was cool', createdAt: new Date(), updatedAt:new Date()},
      {userId: 2, photographerId: 6, review:'Thanks EHogan!', createdAt: new Date(), updatedAt:new Date()},
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
