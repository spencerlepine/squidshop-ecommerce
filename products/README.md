# SquidShop Products Service ![Built With Docker](https://img.shields.io/badge/Built_With-Docker-informational?style=flat&logo=docker)

NodeJS, Express, and Docker API. Connected to Cassanda NoSQL database. CI/CD using GitHub Actions.

## ⚙️ Setup
1. ### Update Environment Variables
Either create an [`.env`](./.env.sample) file or [`docker-compose.yml`](./docker-compose.yml)

2. ## Setup Cassandra Database (locally)

2a. Run Cassandra and enter `cqlsh` in terminal of docker container:
```sh
docker run -d --name cassandra-docker -p 9042:9042 cassandra
docker exec -it cassandra-docker bash
cqlsh # type that, it will enter the cqlsh shell
```

2b. Paste [`db.init.cql`](./db.init.cql) script to initialize database
```sql
-- still inside of cqlsh
CREATE KEYSPACE mykeyspace WITH replication = {'class': 'NetworkTopologyStrategy', 'datacenter1': '3'}  AND durable_writes = true;

USE mykeyspace;

CREATE TABLE products (
...
```
3. ### Run Docker Container
```sh
$ docker-compose up -d
# connects to Cassandra database
# runs node/express api on localhost
```

## Development Setup (Alternative)
```sh
$ cp .env.sample .env
$ yarn install
$ yarn run start
# yarn run test
# yarn run lint
```

## Linter
Uses personal [@spencerlepine](https://github.com/spencerlepine/lint-config) lint configuration.