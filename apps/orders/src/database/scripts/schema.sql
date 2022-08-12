CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE "Orders"(
    "id" INTEGER NOT NULL,
    "orderAddress" VARCHAR(255) NOT NULL,
    "orderTotal" DOUBLE PRECISION NOT NULL,
    "purchaseDate" DATE NOT NULL
);
ALTER TABLE
    "Orders" ADD PRIMARY KEY("id");
CREATE TABLE "OrderItems"(
    "id" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "rating_rate" DOUBLE PRECISION NOT NULL,
    "rating_count" INTEGER NOT NULL
);
ALTER TABLE
    "OrderItems" ADD PRIMARY KEY("id");
ALTER TABLE
    "OrderItems" ADD CONSTRAINT "orderitems_orderid_foreign" FOREIGN KEY("orderId") REFERENCES "Orders"("id");