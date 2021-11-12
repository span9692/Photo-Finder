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
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/116721238_358568658848636_5794182184694953531_n_tx1uxv.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/171382822_534485091256991_7558158554090076566_n_uhrayl.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/175729797_539910720714428_2618599961936166228_n_x6wylm.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/201489991_604674910904675_8821650200149593550_n_uaqn5o.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/240169065_618867639485402_3708939981894847974_n_jemkvc.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/227493642_604674904238009_6062212756178539087_n_c26079.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/239908918_618867596152073_329545731063019395_n_d3cuxh.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/69443900_119562126082625_1262901791557681152_n_qh7mti.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733991/AllPhoto%20PhotoFinder/wedding%20photos/69452924_119560969416074_7525971382035808256_n_vkaffn.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/116876783_358568525515316_3254030643313730669_n_w4zi2w.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
     {portfolioId: 2, url: 'https://res.cloudinary.com/photofinder/image/upload/v1636733992/AllPhoto%20PhotoFinder/wedding%20photos/234397387_611156933589806_6546209443838770767_n_vbl4jo.jpg', type: 'wedding', createdAt: new Date(), updatedAt:new Date()},
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
