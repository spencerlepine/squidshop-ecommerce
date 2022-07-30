# SquidShop Products Service ![Built With Docker](https://img.shields.io/badge/Built_With-Docker-informational?style=flat&logo=docker)

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

# Run Cassandra Locally
```sh
docker run -d --name cassandra-docker -p 9042:9042 cassandra
# enter cql shell
docker exec -it cassandra-docker bash
cqlsh
```

## Run the init.cql script
```sqlc
DROP KEYSPACE IF EXISTS mykeyspace;

CREATE KEYSPACE mykeyspace WITH replication = {'class': 'NetworkTopologyStrategy', 'datacenter1': '3'}  AND durable_writes = true;

USE mykeyspace;

CREATE TABLE products (
    id varchar PRIMARY KEY,
    title varchar,
    price float,
    description varchar,
    category varchar,
    image varchar,
    rating_rate float,
    rating_count int,
    created timestamp,
    updated timestamp,
);

SELECT * FROM products;

insert into products (id, rating_count, title, price, description, category, image, rating_rate) values (uuid(), 0, 'Spizaetus coronatus', 467.26, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'Sports', 'http://dummyimage.com/247x100.png/cc0000/ffffff', 1.6);
insert into products (id, rating_count, title, price, description, category, image, rating_rate) values (uuid(), 0, 'Crotalus cerastes', 596.8, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Shoes', 'http://dummyimage.com/201x100.png/cc0000/ffffff', 2.7);
```