'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Photos', [
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636692234/AllPhoto%20PhotoFinder/wedding%20photos/wedding1_b20x1b.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693119/AllPhoto%20PhotoFinder/wedding%20photos/main-1-2_mcbdpc.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/Bride-and-Groom-Hutton-House-Wedding-Minneapolis-MN_qmgyeb.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/maxresdefault_kcycat.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/01-the-grand-long-beach-wedding-photos-natalie-luca_o1rvja.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693119/AllPhoto%20PhotoFinder/wedding%20photos/44245513_10155923876911984_870515993166741504_n_ipwac3.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693120/AllPhoto%20PhotoFinder/wedding%20photos/home-page-01_mi2q84.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693121/AllPhoto%20PhotoFinder/wedding%20photos/JRRF-38-scaled_boj2e3.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693161/AllPhoto%20PhotoFinder/wedding%20photos/1483735796-1483552460-wedding-photos-30_obvlyi.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 1, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636693161/AllPhoto%20PhotoFinder/wedding%20photos/summit-ceremony_ieksdv.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
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
