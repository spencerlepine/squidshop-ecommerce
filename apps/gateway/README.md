# Gateway API Service - SquidShop Ecommerce

Gateway API microservice to serve as a proxy to internal services. Uses continuous integration to lint, test, and build with `GitHub Actions`.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## ⚙️ Startup and Configuration

1. ### Update Environment Variables
Either create an [`.env`](./.env.sample) file or [`docker-compose.yml`](./docker-compose.yml)

2. ### Run the Docker Container
```sh
$ docker-compose up -d
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