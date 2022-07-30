# Users API Service - SquidShop Ecommerce

Users API microservice to store and magange customer accounts. Connected to relational MySQL database. Uses continuous integration to lint, test, and build with `GitHub Actions`.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

![Microserve Architecture Diagram](./architecture_diagram.png)

## ⚙️ Startup and Configuration

1. ### Update Environment Variables
Either create an [`.env`](./.env.sample) file or [`docker-compose.yml`](./docker-compose.yml)

2. ### Setup MySQL Database (locally)
Using a Docker image, you can connect to MySQL locally

```sh
$ docker run --name=mk-mysql -p3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql/mysql-server:8.0.20
$ docker exec -it mk-mysql bash
bash-4.2# mysql -u root -p
Enter password:
...
mysql> CREATE DATABASE MYSQLTEST;
Query OK, 1 row affected (0.00 sec)
mysql> update mysql.user set host = ‘%’ where user=’root’;
Query OK, 1 row affected (0.02 sec)
```

3. ### Run the Docker Container
```sh
$ docker-compose up -d
# connects to MySQL database
# runs node/express api on localhost
```

## (Alternative) Development Setup
```sh
$ cp .env.sample .env
$ yarn install
$ yarn run start
# NOW: running on localhost
# Extra: yarn run test
# Extra: yarn run lint
```

## Linter
Uses personal [@spencerlepine](https://github.com/spencerlepine/lint-config) lint configuration with `ESLint` and `Prettier`.

## Development Notes

### Sequelize Setup and Usage
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