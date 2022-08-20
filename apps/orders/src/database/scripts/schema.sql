CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;

CREATE TABLE `Orders` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userId` varchar(100) NOT NULL,
    `orderAddress` varchar(100) NOT NULL,
    `orderTotal` float(2) NOT NULL,
    `status` varchar(100) NOT NULL,
    `purchaseDate` DATE NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY `id` (`id`)
);

CREATE TABLE `OrderItems` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `orderId` int(11) NOT NULL,
    `productId` varchar(100) NOT NULL,
    `title` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `image` varchar(255) NOT NULL,
    `category` varchar(50) NOT NULL,
    `price` float(2) NOT NULL,
    `rating_rate` float(1) NOT NULL,
    `rating_count` int(8) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY `id` (`id`)
);

CREATE TABLE `CartItems` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userId` varchar(100) NOT NULL,
    `productId` varchar(100) NOT NULL,
    `title` varchar(255) NOT NULL,
    `description` varchar(500) NOT NULL,
    `image` varchar(255) NOT NULL,
    `category` varchar(50) NOT NULL,
    `price` float(2) NOT NULL,
    `rating_rate` float(1) NOT NULL,
    `rating_count` int(8) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY `id` (`id`)
);