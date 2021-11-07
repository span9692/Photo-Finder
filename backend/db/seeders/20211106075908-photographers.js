'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Photographers', [
      {firstName:'Nick', lastName:'Vu', profilePic:'https://res.cloudinary.com/photofinder/image/upload/v1636311560/nick_profile_mcmsgv.jpg', biography:'Hello! I\'m Nick. Born and raised in San Jose, California, I started taking pictures in my first year of my undergrad!', city:'San Jose', state:'California', price: 75, createdAt: new Date(), updatedAt:new Date()},
      // {firstName:'Da', lastName:'Chhin', biography:'Hello! I\'m Da. From Southern California, I discovered my passion for photography at EDC 2014!', city:'Perris', state:'California', price: 150, createdAt: new Date(), updatedAt:new Date()},
      // {firstName:'John', lastName:'Smith', biography:'Hello! I\'m John. I love getting that perfect shot!', city:'San Francisco', state:'California', price: 100, createdAt: new Date(), updatedAt:new Date()},
      // {firstName:'Sharon', lastName:'Truong', biography:'Hello! I\'m Sharon and photography is my middle name!', city:'San Jose', state:'California', price: 80, createdAt: new Date(), updatedAt:new Date()},
      // {firstName:'Adrian', lastName:'Carter', biography:'Hello! I\'m Adrian and I love photography!', city:'Pheonix', state:'Arizone', price: 60, createdAt: new Date(), updatedAt:new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Photographers', null, {});
  }
};
