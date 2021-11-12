'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'nickv@user.io',
        username: 'nickv',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'don@gmail.com',
        username: 'donc',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'taob@gmail.com',
        username: 'taob',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'johnb@gmail.com',
        username: 'johnb',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'emilyh@gmail.com',
        username: 'emilyh',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'sams@gmail.com',
        username: 'sams',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'dianac@gmail.com',
        username: 'dianac',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'cathyn@gmail.com',
        username: 'cathyn',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'seanp@gmail.com',
        username: 'seanp',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'denisen@gmail.com',
        username: 'denisen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'lilliann@gmail.com',
        username: 'lilliann',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'kellys@gmail.com',
        username: 'kellys',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'justenw@gmail.com',
        username: 'justenw',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'mikep@gmail.com',
        username: 'mikep',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'sharont@gmail.com',
        username: 'sharont',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'richellew@gmail.com',
        username: 'richellew',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'juyaoh@gmail.com',
        username: 'juyaoh',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'michellen@gmail.com',
        username: 'michellen',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'scottw@gmail.com',
        username: 'scottw',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'edwardk@gmail.com',
        username: 'edwardk',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
