/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert('Users', [{
      productName: 'Scooby Snacks',
      purchasePrice: 99.99,
      productId: '7e69e7f3-d6c7-44d0-9ba0-4b5eec36699e',
      productImage: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
      shipAddress: '432 Park Avenue Condominiums, New York City, NY, 10001',
      purchaseDate: new Date().toDateString(),
      userId: 125308123450,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      status: 'ordered',
    }, {
      productName: 'Octopus Goggles',
      purchasePrice: 12.20,
      productId: '7e98e7f3-d6c7-44d0-9ba0-4b5eec36699e',
      productImage: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
      shipAddress: '431 Park Avenue Condominiums, New York City, NY, 10001',
      purchaseDate: new Date().toDateString(),
      userId: 125308123450,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      status: 'ordered',
    }], {}),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.bulkDelete('Users', null, {}),

};
