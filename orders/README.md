# SquidShop Users Service ![Built With Docker](https://img.shields.io/badge/Built_With-Docker-informational?style=flat&logo=docker)

NodeJS, Express, and Docker API. Connected to PostgreSQL database. CI/CD using GitHub Actions.

## Setup
```sh
# UPDATE environment variables in "docker-compose.yml"
$ docker-compose up -d
# access on localhost:5000
```

## Development
```sh
$ cp .env.sample .env
$ yarn install
$ yarn run start
$ yarn run test
$ yarn run lint
```

## Linter
Uses personal [@spencerlepine](https://github.com/spencerlepine/lint-config) lint configuration.

## Using Sequelize
```sh
$ yarn add sequelize sequelize-cli
$ node_modules/.bin/sequelize init
$ node_modules/.bin/sequelize model:generate --name Users --attributes firstName:string,lastName:string,address:string,email:string
$ node_modules/.bin/sequelize db:migrate
# generate seed script
$ node_modules/.bin/sequelize seed:generate --name seed-users
# paste large script below:, then run the command below
$ node_modules/.bin/sequelize db:seed:all
```

```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Contacts', [{
      firstName: 'Snoop',
      lastName: 'Dog',
      phone: '111-222-3333',
      email: 'snoopydog@dogpound.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      firstName: 'Scooby',
      lastName: 'Doo',
      phone: '444-555-6666',
      email: 'scooby.doo@misterymachine.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }, {
      firstName: 'Herbie',
      lastName: 'Husker',
      phone: '402-437-0001',
      email: 'herbie.husker@unl.edu',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Contacts', null, {});
  }
};
```

## Endpoints
```yml
  # Create user order
 - post: '/orders/:userId/create'
  # Find all orders for a user
 - get: '/orders/:userId/all'
  # Find single order for a user
 - get: '/orders/:userId/:orderId'
  # Update user order
 - put: '/orders/:userId/:orderId/update'
  # Delete user order
 - delete: '/orders/:userId/:orderId/delete'
```