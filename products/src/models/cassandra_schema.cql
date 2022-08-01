DROP KEYSPACE IF EXISTS mykeyspace;

CREATE KEYSPACE mykeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}  AND durable_writes = true;

USE mykeyspace;

CREATE TABLE Product (
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