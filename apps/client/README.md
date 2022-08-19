# Client - SquidShop Ecommerce ![Code Coverage](https://img.shields.io/badge/Code%20Coverage-69%25-success?style=flat)

React Frontend client for the  SquidShop Ecommerce website. Uses continuous integration to lint, test, and build with `GitHub Actions`.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

![Frontend Screenshot](./frontend_screenshot.png)

![Microservice Architecture Diagram](./architecture_diagram.png)

## ⚙️ Startup and Configuration

1. ### Update Environment Variables
Either create an [`.env`](./.env.sample) file or [`docker-compose.yml`](./docker-compose.yml)

2. ### Run the Docker Container
```sh
$ docker-compose up -d
# runs on localhost:3000
```

## (Alternative) Development Setup
```sh
$ cp .env.sample .env
$ yarn install
$ yarn run start
# NOW: running on localhost
# Extra: yarn run test
# Extra: yarn run lint
# Extra: yarn run build
```

## Linter
Uses personal [@spencerlepine](https://github.com/spencerlepine/lint-config) lint configuration with `ESLint` and `Prettier`.