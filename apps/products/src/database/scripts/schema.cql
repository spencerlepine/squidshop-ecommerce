CREATE KEYSPACE mykeyspace WITH replication = {'class': 'NetworkTopologyStrategy', 'datacenter1': '3'}  AND durable_writes = true;

USE mykeyspace;

CREATE TABLE products (
    id varchar PRIMARY KEY,
    title varchar,
    price float,
    sale_price float,
    description varchar,
    category varchar,
    image varchar,
    rating_rate float,
    rating_count int,
    created timestamp,
    updated timestamp,
);