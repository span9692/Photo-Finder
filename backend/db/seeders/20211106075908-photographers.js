'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Photographers', [
      {firstName:'Nick', lastName:'Voo', profilePic:'https://res.cloudinary.com/photofinder/image/upload/v1636311560/nick_profile_mcmsgv.jpg', biography:'Hello! I\'m Nick. Born and raised in San Jose, California, I started taking pictures in my first year of my undergrad!', city:'San Jose', state:'CA', userId: 1, price: 75, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Don', lastName:'Crisman', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352729/profile/da_profile_i77a86.jpg', biography:'Hello! I\'m Don. From Southern California, I discovered my passion for photography at EDC 2014!', city:'Perris', state:'CA', userId: 2, price: 150, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Tao', lastName:'Brinkman', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/tao_profile_ponmzy.jpg', biography:'Hello! I\'m Tao and I love photography!', city:'Pheonix', state:'AZ', userId: 3, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'John', lastName:'Pezzuti', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636342490/profile/john_profile_uqwrsg.jpg', biography:'Hello! I\'m John. I love getting that perfect shot!', city:'San Francisco', state:'CA', userId: 4, price: 100, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Emily', lastName:'Hogan', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/emily_profile_trrflq.jpg', biography:'Hello! I\'m Emily and I love photography!', city:'Alemeda', state:'CA', userId: 5, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Sam', lastName:'Smith', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352731/profile/sam_profile_qkrkhw.jpg', biography:'Hello! I\'m Sam and I love photography!', city:'Santa Clara', state:'CA', userId: 6, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Diana', lastName:'Cullen', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352729/profile/ed_profile_x7x9ug.jpg', biography:'Hello! I\'m Diana and I love photography!', city:'Las Vegas', state:'NV', userId: 7, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Cathy', lastName:'Ngo', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352729/profile/jason_profile_iwkyaa.jpg', biography:'Hello! I\'m Cathy and I love photography!', city:'Irvine', state:'CA', userId: 8, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Sean', lastName:'Penn', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352731/profile/sean_profile_yrelsa.jpg', biography:'Hello! I\'m Sean and I love photography!', city:'Irvine', state:'CA', userId: 9, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Denise', lastName:'Norbert', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352729/profile/denise_profile_tbveyg.jpg', biography:'Hello! I\'m Denise and I love photography!', city:'Sunnyvale', state:'CA', userId: 10, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Lillian', lastName:'Nori', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/lillian_profile_yutxxy.jpg', biography:'Hello! I\'m Lillian and I love photography!', city:'San Francisco', state:'CA', userId: 11, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Kelly', lastName:'Sui', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352731/profile/tammy_profile_auinit.jpg', biography:'Hello! I\'m Kelly and I love photography!', city:'Fremont', state:'CA', userId: 12, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Justen', lastName:'Wan', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/justen_profile_h82bmy.jpg', biography:'Hello! I\'m Justen and I love photography!', city:'San Jose', state:'CA', userId: 13, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Mike', lastName:'Posner', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/mike_profile_mvnvgp.jpg', biography:'Hello! I\'m Mike and I love photography!', city:'Oakland', state:'CA', userId: 14, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Sharon', lastName:'Trask', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636342490/profile/sharon_profile_empttq.jpg', biography:'Hello! I\'m Sharon and photography is my middle name!', city:'San Jose', state:'CA', userId: 15, price: 80, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Richelle', lastName:'Wong', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/li_profile_ow1ok6.jpg', biography:'Hello! I\'m Richelle and I love photography!', city:'Santa Clara', state:'CA', userId: 16, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Juyao', lastName:'Ho', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352731/profile/tuan_profile_vkn1b0.jpg', biography:'Hello! I\'m Juyao and I love photography!', city:'Santa Clara', state:'CA', userId: 17, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Michelle', lastName:'Noon', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352729/profile/christina_profile_ynth8p.jpg', biography:'Hello! I\'m Michelle and I love photography!', city:'Anaheim', state:'CA', userId: 18, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Scott', lastName:'Waters', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352732/profile/ying_profile_tlmedw.jpg', biography:'Hello! I\'m Scott and I love photography!', city:'Oakland', state:'CA', userId: 19, price: 60, createdAt: new Date(), updatedAt:new Date()},
      {firstName:'Edward', lastName:'Kong', profilePic: 'https://res.cloudinary.com/photofinder/image/upload/v1636352730/profile/scott_profile_tzdwh0.jpg', biography:'Hello! I\'m Edward and I love photography!', city:'Santa Clara', state:'CA', userId: 20, price: 60, createdAt: new Date(), updatedAt:new Date()},

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
