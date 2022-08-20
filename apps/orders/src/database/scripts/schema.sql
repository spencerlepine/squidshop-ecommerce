CREATE TABLE Orders (
    id INTEGER PRIMARY KEY,
    userId VARCHAR ( 255 ) NOT NULL,
    orderAddress VARCHAR ( 255 ) NOT NULL,
    orderTotal FLOAT(2) NOT NULL,
    status VARCHAR ( 255 ) NOT NULL,
    purchaseDate DATE NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE OrderItems (
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

CREATE TABLE CartItem (
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