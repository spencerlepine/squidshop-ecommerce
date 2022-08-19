DROP KEYSPACE IF EXISTS mykeyspace;

CREATE KEYSPACE mykeyspace WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1}  AND durable_writes = true;

USE mykeyspace;

CREATE TABLE product (
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

insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('aedfd340-9216-4e9b-8369-6dbab78cc182', 'Chaz Kangeroo Hoodie', 13, 0, 'This is a variable product called a Chaz Kangeroo Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4ba33349-dd46-4194-92de-aae65e0aa4af', 'Chaz Kangeroo Hoodie-L-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('69a0ea00-550a-4464-9c5f-39dd50eb972d', 'Chaz Kangeroo Hoodie-L-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0d13b089-306a-49d7-a259-851e83e815d8', 'Chaz Kangeroo Hoodie-L-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('bb9e0a91-c858-4cdf-b5e6-1bb424583509', 'Chaz Kangeroo Hoodie-M-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('acb3773b-4cbc-4cd3-9b65-bba1745f82c4', 'Chaz Kangeroo Hoodie-M-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('32cc2912-48be-4f66-84e4-2c52b68d2a8f', 'Chaz Kangeroo Hoodie-M-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('68631a8d-9c49-4205-b167-d90d42386cf9', 'Chaz Kangeroo Hoodie-S-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('07b3511a-e3fa-4519-81dc-afbefbe062a6', 'Chaz Kangeroo Hoodie-S-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('6e47c3be-b935-4b61-b75f-d04d6b4c1cd8', 'Chaz Kangeroo Hoodie-S-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('f785cbff-b6ac-443e-8d9c-22455ab9134e', 'Chaz Kangeroo Hoodie-XL-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('3d00b734-a7fb-4a4f-a95b-6bbb05b12695', 'Chaz Kangeroo Hoodie-XL-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d24372e9-bf7a-4bf2-8f24-99252773ba43', 'Chaz Kangeroo Hoodie-XL-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('2cbd991d-30f7-4c39-9645-5bd3fc909fe4', 'Chaz Kangeroo Hoodie-XS-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('f45f80c0-2cf1-4897-8c35-e70a6c6f2e7f', 'Chaz Kangeroo Hoodie-XS-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('056c5f08-c84f-49ce-8b2a-56df72f70cf7', 'Chaz Kangeroo Hoodie-XS-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh01-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a64348b4-2799-43b1-8bfe-653897999c84', 'Teton Pullover Hoodie', 13, 0, 'This is a variable product called a Teton Pullover Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a949e514-2a48-4548-84b2-8e7b3ccc6600', 'Teton Pullover Hoodie-L-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('6d074096-7f9c-4398-ad90-017ca259c3af', 'Teton Pullover Hoodie-L-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('96a8b13c-eb4b-4238-9a41-a4e4db15ea1e', 'Teton Pullover Hoodie-L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b34a6ada-0533-4ec2-b333-6ec8654fed1c', 'Teton Pullover Hoodie-M-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('75f8ebf8-202b-439b-8fed-ad93b1aed0a5', 'Teton Pullover Hoodie-M-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('f98dc15c-efda-44be-9e6b-73a91cb74adf', 'Teton Pullover Hoodie-M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('51ad1d16-7445-4950-9279-4dbc65f627a3', 'Teton Pullover Hoodie-S-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('356b4779-1206-4e80-b936-500695d1932a', 'Teton Pullover Hoodie-S-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('04744af6-ed90-4360-98cc-8ab2a12ee355', 'Teton Pullover Hoodie-S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('08ff3958-e363-4249-b1ab-2883927d9200', 'Teton Pullover Hoodie-XL-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('541bbfa9-8f2b-43eb-a0e8-4f2e1fee3046', 'Teton Pullover Hoodie-XL-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b5846423-b92f-4cc0-b5eb-71c031addb51', 'Teton Pullover Hoodie-XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7f432a19-9046-4767-afbe-147d914a373c', 'Teton Pullover Hoodie-XS-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a7ef4d6f-8992-4681-ae12-2e7c85119a62', 'Teton Pullover Hoodie-XS-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7b12ddf3-dbf8-4e93-9ff5-94865ca38669', 'Teton Pullover Hoodie-XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh02-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('e9062f56-c47f-4c44-a6e7-62cf487d589d', 'Bruno Compete Hoodie', 13, 0, 'This is a variable product called a Bruno Compete Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('23ea3923-0195-4de3-8d7c-45b1a88ecc28', 'Bruno Compete Hoodie-L-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b2e6e6a6-4ac6-4cb2-9994-223964be7983', 'Bruno Compete Hoodie-L-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('40fe0f25-adda-486c-a592-15c89deed0e5', 'Bruno Compete Hoodie-L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a421f072-8d96-4f01-bb39-b8ee20736fbf', 'Bruno Compete Hoodie-M-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0261cc58-f240-4aa6-b94f-4055930988e2', 'Bruno Compete Hoodie-M-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4073ee49-250d-4248-8083-6bc303b16a17', 'Bruno Compete Hoodie-M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('afcde6ac-f857-48c3-8519-8c629e111a0b', 'Bruno Compete Hoodie-S-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('53ef85cb-28bd-4b85-b110-0800a4b9a643', 'Bruno Compete Hoodie-S-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('e4017377-d31f-47ad-bb06-7ab67b7264d4', 'Bruno Compete Hoodie-S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('6d1d206d-dd2a-47ad-88b7-6ea3c3402c58', 'Bruno Compete Hoodie-XL-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('2a2440fa-874c-4a8b-8ca2-8722ccc9c86f', 'Bruno Compete Hoodie-XL-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7a888e73-572a-4a32-9ca4-b1096c7b8602', 'Bruno Compete Hoodie-XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('54eec0c4-51d8-461a-9a6f-e20f4ddc48b0', 'Bruno Compete Hoodie-XS-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('10c3518e-6a8d-470c-ab5c-f27269674e83', 'Bruno Compete Hoodie-XS-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('cc369e3b-0792-4142-b001-053337da8766', 'Bruno Compete Hoodie-XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh03-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('09260ab3-03b1-4e6a-ad07-63610585edd7', 'Frankie  Sweatshirt', 13, 0, 'This is a variable product called a Frankie  Sweatshirt', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('591abae1-8125-4f86-9f0a-cec6d3d4d65a', 'Frankie  Sweatshirt-L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('e9e85b02-e338-470c-bf02-54c0871b9989', 'Frankie  Sweatshirt-L-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ed9e35bd-7038-4856-8603-ef48f2ad59b3', 'Frankie  Sweatshirt-L-Yellow', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-yellow_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('74e4de70-02fd-4026-ad63-fa300e8278a7', 'Frankie  Sweatshirt-M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8280092d-c1c2-4daa-b2a1-0aec6ed81a7a', 'Frankie  Sweatshirt-M-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7cedfda4-fd0b-403c-9d5b-0a3e7d13951e', 'Frankie  Sweatshirt-M-Yellow', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-yellow_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('db0d119d-6c96-4cfb-8cc1-2de2ed822ea8', 'Frankie  Sweatshirt-S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('18949f83-e3d1-477a-8cf2-150fb1a1a486', 'Frankie  Sweatshirt-S-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1c7d95e3-596a-4872-875f-5df9b25aaec5', 'Frankie  Sweatshirt-S-Yellow', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-yellow_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4a526357-2d21-4cee-af19-eb1dda4e4082', 'Frankie  Sweatshirt-XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b7e0f296-9406-4117-95ff-7f0ab29c8be6', 'Frankie  Sweatshirt-XL-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d92a96f9-cec8-410c-940c-85f3d47a6e10', 'Frankie  Sweatshirt-XL-Yellow', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-yellow_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('5aad4348-2b22-4b62-bf34-f546a4849e8d', 'Frankie  Sweatshirt-XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('143b63d6-8748-41d0-a578-d89c1cbd9d3b', 'Frankie  Sweatshirt-XS-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('aa416fc7-ab88-4072-92d9-8263480e234a', 'Frankie  Sweatshirt-XS-Yellow', 9, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh04-yellow_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('519cd7f1-519f-4cb2-98a9-3fc5fff6a211', 'Hollister Backyard Sweatshirt', 13, 0, 'This is a variable product called a Hollister Backyard Sweatshirt', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b49417e3-9781-440e-95de-c9413da9bdd9', 'Hollister Backyard Sweatshirt-L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('441b9310-d631-40de-9d94-1c489c72f6cd', 'Hollister Backyard Sweatshirt-L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('c3f96091-6788-405b-8348-a1ffe7e650bc', 'Hollister Backyard Sweatshirt-L-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('cc97459e-e125-4ff7-91c8-00985916348e', 'Hollister Backyard Sweatshirt-M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('fe168700-2398-4e7d-be55-603f6125551a', 'Hollister Backyard Sweatshirt-M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('30bd7801-9ea1-441d-b7de-28b5a2b6fef3', 'Hollister Backyard Sweatshirt-M-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('c5af989b-ed16-41d4-9842-ce08c470ec92', 'Hollister Backyard Sweatshirt-S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('05faf258-428f-43c2-973c-60d67ac43805', 'Hollister Backyard Sweatshirt-S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('904fc57f-e6dd-4665-8d52-538bb595a91a', 'Hollister Backyard Sweatshirt-S-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('db3bcc01-03c7-40ab-b990-2e9c335fa520', 'Hollister Backyard Sweatshirt-XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('dda49fc8-95b9-48ff-b2fc-aa371d1db6ce', 'Hollister Backyard Sweatshirt-XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('acca72d0-0985-4bf7-be00-6056fc501ac2', 'Hollister Backyard Sweatshirt-XL-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8199033b-ba87-4ce0-be26-39a36f58497b', 'Hollister Backyard Sweatshirt-XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('18c99e15-197f-43b5-9203-5c6c1e659cf3', 'Hollister Backyard Sweatshirt-XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ba61dacd-0f3b-4004-81b0-8d3964d8d519', 'Hollister Backyard Sweatshirt-XS-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh05-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('97631828-c633-4b49-bd13-0ddda1fc012a', 'Stark Fundamental Hoodie', 13, 0, 'This is a variable product called a Stark Fundamental Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1c065958-4902-4596-8e87-c44bb7904b36', 'Stark Fundamental Hoodie-L-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('17eafabe-1b04-4ef8-bebf-812b0affa88a', 'Stark Fundamental Hoodie-L-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a907b06f-3d64-4dc8-b914-ddd8a27b25ab', 'Stark Fundamental Hoodie-L-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('539cf85c-0e20-454c-aa96-c1ad7cd2d5e0', 'Stark Fundamental Hoodie-M-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('41bebfdd-875c-4cc2-8e4a-de2f9d654a80', 'Stark Fundamental Hoodie-M-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('e51ee773-f973-4d3e-89d2-4dfe66f555f8', 'Stark Fundamental Hoodie-M-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('591b49de-d504-42ab-a180-21aa83ec8f11', 'Stark Fundamental Hoodie-S-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('f83f0cdb-59dc-45ba-b994-f5ca074914cc', 'Stark Fundamental Hoodie-S-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1c8a2ad8-70cf-4a2b-8138-cc4be6789e2d', 'Stark Fundamental Hoodie-S-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('afbf6e3d-1641-48d2-9385-c6eb5cc3ca48', 'Stark Fundamental Hoodie-XL-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ffec1066-36b9-4e28-ad0a-069032c72e96', 'Stark Fundamental Hoodie-XL-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('850f17fb-4826-48f1-8177-f313dac9054a', 'Stark Fundamental Hoodie-XL-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4775e2b8-c417-4f7e-ab24-439d795e1f74', 'Stark Fundamental Hoodie-XS-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('444b190c-7f86-4dbf-8795-3b7dd5306802', 'Stark Fundamental Hoodie-XS-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('290a66ab-319c-44dc-bf73-6b77b131f024', 'Stark Fundamental Hoodie-XS-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh06-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b1c60121-ad46-4f7d-827a-32e67dd31f4e', 'Hero Hoodie', 13, 0, 'This is a variable product called a Hero Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d45c2454-71f4-4d7c-974c-9ffca9239ecc', 'Hero Hoodie-L-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('03065046-ae50-43e8-b262-80ad1678cba2', 'Hero Hoodie-L-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('fda13fce-fd32-42dc-b4f3-cdf95de7c0c9', 'Hero Hoodie-L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('5900e507-9732-4b9b-9296-dac42a701add', 'Hero Hoodie-M-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7209b5f6-c3cc-4614-aba9-910270af66ea', 'Hero Hoodie-M-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('41523f98-da5c-4290-9a88-98eca0515e52', 'Hero Hoodie-M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8312b179-914e-4e1a-bd4e-9610f927716f', 'Hero Hoodie-S-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('328bae3c-81da-451a-935f-20b8cd282298', 'Hero Hoodie-S-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('e95ca868-6deb-45cb-8e85-ac0deb98b1c1', 'Hero Hoodie-S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a8c84618-7560-417c-badb-99bfcca9f315', 'Hero Hoodie-XL-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8d5e0934-2c38-4928-8a1a-5cd87133bc63', 'Hero Hoodie-XL-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d514906c-c808-482b-9823-023afee7acca', 'Hero Hoodie-XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0875dea3-251c-4e6a-9be1-5cfc85efc632', 'Hero Hoodie-XS-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('59b12ec6-f691-4559-a3c4-4a1452a301ac', 'Hero Hoodie-XS-Gray', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-gray_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4903bd5f-3be2-43cb-a447-c03c0dc58f96', 'Hero Hoodie-XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh07-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0a7bc912-27a4-43be-88f9-57bed9924486', 'Oslo Trek Hoodie', 13, 0, 'This is a variable product called a Oslo Trek Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-brown_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('dbda4408-ccf8-46d7-92c8-dcfbb5203a9f', 'Oslo Trek Hoodie-L-Brown', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-brown_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('efbf6997-9269-4828-8d01-8588daf08315', 'Oslo Trek Hoodie-L-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b6ed437e-6f9c-462e-b02a-40fc904fab85', 'Oslo Trek Hoodie-L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('6d555bdb-2d44-4f5f-a642-48cdb7d76fb8', 'Oslo Trek Hoodie-M-Brown', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-brown_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('44689ef7-4d2e-45fa-8169-9df703ea66a5', 'Oslo Trek Hoodie-M-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('45c09458-6153-40d9-9371-6253e4abb22e', 'Oslo Trek Hoodie-M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('37407e32-b56f-49ed-8552-4b841b61d38d', 'Oslo Trek Hoodie-S-Brown', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-brown_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('599c10dd-39c0-4515-9e3d-abb24ce41a56', 'Oslo Trek Hoodie-S-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('08853c39-16a4-453a-9065-40ab03b5dd9b', 'Oslo Trek Hoodie-S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('9297ff65-761b-42da-ab7c-1a6f833106cc', 'Oslo Trek Hoodie-XL-Brown', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-brown_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('37b23891-b9a9-4d87-8ae3-e1db65e0d752', 'Oslo Trek Hoodie-XL-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1fd1ede7-1187-420d-978c-84c091bdc3d8', 'Oslo Trek Hoodie-XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('78a8d5fe-d8f1-4fff-8a4b-21c673b0692f', 'Oslo Trek Hoodie-XS-Brown', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-brown_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('fe5c3b06-9980-4c43-a234-6ed96f4b8e32', 'Oslo Trek Hoodie-XS-Purple', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-purple_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('55c779c6-ec35-4381-abe7-faf001e66e1a', 'Oslo Trek Hoodie-XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh08-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('3190a472-e484-4bc0-b2bd-e7b8d02668a5', 'Abominable Hoodie', 13, 0, 'This is a variable product called a Abominable Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('980efa48-da43-44c1-815a-0a6d8e34a5a5', 'Abominable Hoodie-L-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('24f1692f-fe5e-4339-9166-8a1da1e1bd8a', 'Abominable Hoodie-L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d2de028f-0cda-469b-a566-c2b159816d55', 'Abominable Hoodie-L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d97c92a3-e953-4f42-8b91-dfb00f92ed4b', 'Abominable Hoodie-M-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d45dbcce-2b27-446d-af7f-da1ba095a53f', 'Abominable Hoodie-M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('197c4e38-54df-4533-ac0e-0b2ee6d79762', 'Abominable Hoodie-M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('67348468-a800-4559-ae13-d503f411cdb8', 'Abominable Hoodie-S-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('252e38db-d9e8-4141-af71-45745659ccc5', 'Abominable Hoodie-S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('65f47e72-2a1a-4e53-adff-94db3b7c08e2', 'Abominable Hoodie-S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('2451a550-7657-46bc-8f0a-0be19751c041', 'Abominable Hoodie-XL-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('a3808852-8f46-4b45-b18e-b26502645bc9', 'Abominable Hoodie-XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('33017ff8-d2d5-434f-8a72-7a40ea82a533', 'Abominable Hoodie-XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('5651c0e0-07bb-4f11-9af8-eeda5b57dd76', 'Abominable Hoodie-XS-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8c9b9e1d-0011-4a33-b8b3-9ef26f1c5fcc', 'Abominable Hoodie-XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1717c401-28b9-4802-b963-ade10b78a10c', 'Abominable Hoodie-XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh09-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8752d027-8270-44c7-b5d3-40991a8b0d18', 'Mach Street Sweatshirt', 13, 0, 'This is a variable product called a Mach Street Sweatshirt', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('697969cf-4605-4be5-baef-ec895984a2a6', 'Mach Street Sweatshirt -L-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d68359d2-502d-4fa0-b930-8c4cd3c77554', 'Mach Street Sweatshirt -L-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7a0af537-f696-4067-a7a7-a3d6854cb516', 'Mach Street Sweatshirt -L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b143b432-494f-4cb6-9329-812617c25aa7', 'Mach Street Sweatshirt -M-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('48d69ba1-270d-48a4-89f4-b47cdb10e5eb', 'Mach Street Sweatshirt -M-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('9a0fe5f1-ebf8-4162-9e7c-322bb0643b82', 'Mach Street Sweatshirt -M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('bcd5d946-e007-4f45-9ef6-9312d3f18925', 'Mach Street Sweatshirt -S-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('2ac1941b-e3ba-4813-a6c6-14b6d25511a8', 'Mach Street Sweatshirt -S-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('486bc9b4-f4b5-4f27-a921-9b859e5b9938', 'Mach Street Sweatshirt -S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('84c2c674-b324-43cd-95ec-15bd10ed377c', 'Mach Street Sweatshirt -XL-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('acb42f62-6dea-4655-add4-f8755eb328f2', 'Mach Street Sweatshirt -XL-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('aed6f6e1-115a-420d-b5d7-81db8948abf4', 'Mach Street Sweatshirt -XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('aa973b57-a136-4c49-a0b4-13e1debfb0e8', 'Mach Street Sweatshirt -XS-Black', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-black_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('e9581ff7-cc03-473d-bb44-ffc29b535179', 'Mach Street Sweatshirt -XS-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('9b676f25-f65a-46e4-96fd-47c90615ff0b', 'Mach Street Sweatshirt -XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh10-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ce152275-9777-41fb-a6c5-15a95835b2d8', 'Grayson Crewneck Sweatshirt', 13, 0, 'This is a variable product called a Grayson Crewneck Sweatshirt', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('64970e74-9176-4b81-ad9f-e5d004fd5e4f', 'Grayson Crewneck Sweatshirt -L-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0baa448a-5d78-48b7-96a4-5a90f3a0a4cc', 'Grayson Crewneck Sweatshirt -L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('72254703-5a2d-40e9-a1ac-80bb7b80967f', 'Grayson Crewneck Sweatshirt -L-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d47d28aa-ef68-4310-b91f-1753427c5b2d', 'Grayson Crewneck Sweatshirt -M-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('793f9698-eae3-42ef-a94f-d831d8a6d220', 'Grayson Crewneck Sweatshirt -M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d7450855-3a9f-42b2-afaa-7beef5db233d', 'Grayson Crewneck Sweatshirt -M-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1dd1517f-a732-4b5d-b4fb-75a8458c48b8', 'Grayson Crewneck Sweatshirt -S-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('49f4d02f-af6b-4397-9203-19c0c4b0e000', 'Grayson Crewneck Sweatshirt -S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('f277313d-74b8-4852-8980-85a15711f24f', 'Grayson Crewneck Sweatshirt -S-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('34aab867-b45c-45e5-8ea1-86dde0af4a81', 'Grayson Crewneck Sweatshirt -XL-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4b8a0f43-1f5f-4f3f-a0f7-d3562e7feaf5', 'Grayson Crewneck Sweatshirt -XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ac243f3d-95c8-4513-9650-a51b1c1f6dcf', 'Grayson Crewneck Sweatshirt -XL-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ec8d93c1-8443-4ba6-a32d-1ed7a97b608c', 'Grayson Crewneck Sweatshirt -XS-Orange', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-orange_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('73214cf1-d76e-4d25-9597-ab829b9c55f2', 'Grayson Crewneck Sweatshirt -XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4652f4ba-5fc6-4ea2-b2ac-72f1133e6928', 'Grayson Crewneck Sweatshirt -XS-White', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh11-white_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('387872ef-688a-49cb-a3b2-62f09179dc1f', 'Ajax Full-Zip Sweatshirt', 9, 0, 'This is a variable product called a Ajax Full-Zip Sweatshirt', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('7f96a4e1-a2cd-42c8-be34-52cb79e11a4b', 'Ajax Full-Zip Sweatshirt -L-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('c8848d64-b2a8-4a53-a952-3687ec552f86', 'Ajax Full-Zip Sweatshirt -L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8d0a6fdd-557f-475e-a6fd-a9dbfdbe2f20', 'Ajax Full-Zip Sweatshirt -L-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('1a963fa8-9464-451a-896c-0dd38f1ac390', 'Ajax Full-Zip Sweatshirt -M-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0cb4306c-e5ae-4be2-892d-3da83cc6e427', 'Ajax Full-Zip Sweatshirt -M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('31b8b6aa-1ff5-402e-968c-908c340d022b', 'Ajax Full-Zip Sweatshirt -M-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('55efdfde-726c-42b1-b3bb-cbe6beb063dc', 'Ajax Full-Zip Sweatshirt -S-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4f1af805-00d2-4539-8943-a51760765110', 'Ajax Full-Zip Sweatshirt -S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0f5b80b2-1055-4539-86b9-2a76dffc9d96', 'Ajax Full-Zip Sweatshirt -S-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('b940591a-2a26-406c-bc46-acc96d1cf12f', 'Ajax Full-Zip Sweatshirt -XL-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('0579decb-93ec-466c-8230-9b71abb80f6a', 'Ajax Full-Zip Sweatshirt -XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('77787f08-57a6-4905-836a-bb201828ff76', 'Ajax Full-Zip Sweatshirt -XL-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d2cef590-6395-4f20-85ac-380ef88c8ffb', 'Ajax Full-Zip Sweatshirt -XS-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('c20ec1cd-0cca-4298-b9db-3bab680446e9', 'Ajax Full-Zip Sweatshirt -XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('269bf369-410e-4f10-a94e-81f86d5fbe74', 'Ajax Full-Zip Sweatshirt -XS-Red', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh12-red_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('154f0821-b203-4666-9e7e-c96b03dee250', 'Marco Lightweight Active Hoodie', 13, 0, 'This is a variable product called a Marco Lightweight Active Hoodie', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('93d73d5d-9f98-45bb-a3c3-3993bb22b6b6', 'Marco Lightweight Active Hoodie-L-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('ba31f38a-5170-487a-8a1e-fa6f83346689', 'Marco Lightweight Active Hoodie-L-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('c57f2dab-5b7c-43e8-bfd5-bcd5f19a9e99', 'Marco Lightweight Active Hoodie-L-Lavender', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-lavender_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('291bd93f-79c5-4a5a-b26b-1b8c0bb904d9', 'Marco Lightweight Active Hoodie-M-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('3169a6b7-b190-4b3e-b215-5b213f05a21b', 'Marco Lightweight Active Hoodie-M-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('d88692f6-30fe-44d3-9acd-bdfd52026ebe', 'Marco Lightweight Active Hoodie-M-Lavender', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-lavender_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('6d094412-4c7d-442f-8da6-d292c17f8ec0', 'Marco Lightweight Active Hoodie-S-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('3486f4d1-9d1d-43a6-80c8-12974c77a656', 'Marco Lightweight Active Hoodie-S-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8d99450c-0cb0-40d2-87d5-c90d5eea6a05', 'Marco Lightweight Active Hoodie-S-Lavender', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-lavender_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('8846fdc9-93f7-4da4-8fbf-a245047c1cb3', 'Marco Lightweight Active Hoodie-XL-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('de553418-14fb-4bb9-bced-6c0e9cc0cd66', 'Marco Lightweight Active Hoodie-XL-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('4df22336-b439-471c-ab69-42435a8798df', 'Marco Lightweight Active Hoodie-XL-Lavender', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-lavender_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('2bc05d78-6659-4b84-95ea-c515cadd3615', 'Marco Lightweight Active Hoodie-XS-Blue', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-blue_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));
insert into product (id, title, price, sale_price, description, category, image, rating_rate, rating_count, created, updated) values ('54d56806-f7d6-4527-930a-6102379a63e2', 'Marco Lightweight Active Hoodie-XS-Green', 13, 0, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Hoodies & Sweatshirts', 'http://eimages.valtim.com/acme-images/product/m/h/mh13-green_main.jpg', 3.5, 0, toTimestamp(now()), toTimestamp(now()));