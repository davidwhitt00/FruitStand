'use strict';
const chance = require('chance')()

module.exports = {
  up: (queryInterface, Sequelize) => {
    let productArr = [];

    for (let i = 1; i < 101; i++) {
      const productObj = {
        id: i,
        product_name: `product${i}`,
        product_description: chance.paragraph({sentences: 1}),
        product_price: 5.00,
        product_image: 'image',
        userId: i,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      };
      productArr.push(productObj);
    }
    return queryInterface.bulkInsert('products', productArr, {});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});

  }
};