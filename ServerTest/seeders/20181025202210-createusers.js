'use strict';
const chance = require('chance')()

module.exports = {
  up: (queryInterface, Sequelize) => {
    let userArr = [];

    for (let i = 1; i < 101; i++) {
      const userObj = {
        id: i,
        first_name: chance.first({ gender: "female" }),
        last_name: chance.last(),
        email: chance.email(),
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      };
      userArr.push(userObj);
    }
    return queryInterface.bulkInsert('users', userArr, {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});

  }
};
