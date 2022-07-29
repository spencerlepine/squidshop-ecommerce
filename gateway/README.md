# NodeJS, Express, and Docker Boilerplate

[![CI](https://github.com/spencerlepine/express-docker-boilerplate/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/spencerlepine/express-docker-boilerplate/actions/workflows/ci.yml) [![Publish Docker](https://github.com/spencerlepine/express-docker-boilerplate/actions/workflows/publish-to-ghcr.yml/badge.svg?branch=main)](https://github.com/spencerlepine/express-docker-boilerplate/actions/workflows/publish-to-ghcr.yml)[![Stable Version](https://img.shields.io/github/v/tag/spencerlepine/express-docker-boilerplate)](https://img.shields.io/github/v/tag/spencerlepine/express-docker-boilerplate) [![Latest Release](https://img.shields.io/github/v/release/spencerlepine/express-docker-boilerplate?color=%233D9970)](https://img.shields.io/github/v/tag/spencerlepine/express-docker-boilerplate?color=%233D9970)

NodeJS, Express, and Docker Boilerplate. CI/CD using GitHub Actions. Published to GitHub Container Registry.
## Setup
```sh
$ git clone https://github.com/spencerlepine/express-docker-boilerplate.git
$ cd express-docker-boilerplate
$ docker-compose up -d
# access on localhost:3000
```

![Diagram](./diagram.png)

## Test
```sh
$ docker-compose exec api yarn run test
```

## Pull from GitHub Repository Container Registry
```sh
# docker pull ghcr.io/OWNER/IMAGE_NAME
$ docker pull ghcr.io/spencerlepine/express-docker-boilerplate:0.1.0
```