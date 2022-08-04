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
      firstName: 'Snoop',
      lastName: 'Dogg',
      address: 'UrMom Avenue, New York City, NY 10001',
      email: 'snoopydog@dogpound.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      firstName: 'Scooby',
      lastName: 'Doo',
      address: 'Cat Avenue, New York City, NY 10001',
      email: 'scooby.doo@misterymachine.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    }, {
      firstName: 'Herbie',
      lastName: 'Husker',
      address: 'Dog Avenue, New York City, NY 10001',
      email: 'herbie.husker@unl.edu',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
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
