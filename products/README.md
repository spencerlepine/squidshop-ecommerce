# SquidShop Products Service

NodeJS, Express, and Docker API. Connected to Cassanda NoSQL database. CI/CD using GitHub Actions.

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
