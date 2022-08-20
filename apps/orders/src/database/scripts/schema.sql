DO
$do$
BEGIN
   IF EXISTS (
      SELECT FROM pg_catalog.pg_roles
      WHERE  rolname = 'testuser') THEN

      RAISE NOTICE 'Role "testuser" already exists. Skipping.';
   ELSE
      CREATE ROLE testuser LOGIN PASSWORD 'password';
   END IF;
END
$do$;

CREATE TABLESPACE testtablespace OWNER testuser LOCATION '/var/lib/postgresql';
CREATE SCHEMA testschema;
ALTER SCHEMA testschema OWNER TO testuser;
CREATE DATABASE testdb WITH TABLESPACE testtablespace ENCODING 'UNICODE' LC_COLLATE 'C' LC_CTYPE 'C' TEMPLATE template0 OWNER testuser;
ALTER DATABASE testdb SET search_path TO testschema, public;
ALTER ROLE testuser SET search_path TO testschema, public;
GRANT ALL ON DATABASE testdb TO testuser;
GRANT ALL ON SCHEMA testschema TO testuser;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA testschema TO testuser;
ALTER ROLE testuser SET default_tablespace = testtablespace;

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    userId VARCHAR ( 255 ) NOT NULL,
    orderAddress VARCHAR ( 255 ) NOT NULL,
    orderTotal FLOAT(2) NOT NULL,
    status VARCHAR ( 255 ) NOT NULL,
    purchaseDate DATE NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE orderitems (
    id INTEGER PRIMARY KEY,
    orderId INTEGER NOT NULL,
    productId VARCHAR ( 255 ) NOT NULL,
    title VARCHAR ( 255 ) NOT NULL,
    description VARCHAR ( 255 ) NOT NULL,
    image VARCHAR ( 255 ) NOT NULL,
    category VARCHAR ( 255 ) NOT NULL,
    price FLOAT(2) NOT NULL,
    rating_rate FLOAT(1) NOT NULL,
    rating_count INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    CONSTRAINT fk_order
      FOREIGN KEY(orderId) 
	  REFERENCES orders(id)
);

CREATE TABLE cartitem (
    id INTEGER PRIMARY KEY,
    orderId INTEGER NOT NULL,
    userId VARCHAR ( 255 ) NOT NULL,
    productId VARCHAR ( 255 ) NOT NULL,
    title VARCHAR ( 255 ) NOT NULL,
    description VARCHAR ( 255 ) NOT NULL,
    image VARCHAR ( 255 ) NOT NULL,
    category VARCHAR ( 255 ) NOT NULL,
    price FLOAT(2) NOT NULL,
    rating_rate FLOAT(1) NOT NULL,
    rating_count INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    CONSTRAINT fk_order_cart
      FOREIGN KEY(orderId) 
	  REFERENCES orders(id)
);