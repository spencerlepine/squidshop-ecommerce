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


insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c6dc4be2-3973-4993-adbf-d04a510f66d7', 'Dendrocitta vagabunda', 14.51, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Outdoors', 'http://dummyimage.com/167x100.png/cc0000/ffffff', 2.9, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('e0aa1f27-5ba7-4e82-86b2-7401efe698cb', 'Graspus graspus', 276.24, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Industrial', 'http://dummyimage.com/234x100.png/cc0000/ffffff', 2.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('95047e83-6d6c-4ffd-8be4-c5cdbc8468d1', 'Dasyurus viverrinus', 179.34, 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Toys', 'http://dummyimage.com/141x100.png/5fa2dd/ffffff', 1.8, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('deb621f4-2874-4569-9a56-5bf4e76a89ff', 'Sula dactylatra', 544.04, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Electronics', 'http://dummyimage.com/127x100.png/5fa2dd/ffffff', 5.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('04304d69-c624-48c1-baca-57cfa3242dbc', 'Microcebus murinus', 310.44, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Games', 'http://dummyimage.com/144x100.png/ff4444/ffffff', 3.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('4e41a667-b7c1-43d3-883a-e78b15e0da30', 'Fulica cristata', 913.57, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Sports', 'http://dummyimage.com/157x100.png/5fa2dd/ffffff', 2.3, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('bb0e3f03-2795-4f46-b840-b87f1f137af7', 'Delphinus delphis', 16.36, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Toys', 'http://dummyimage.com/211x100.png/cc0000/ffffff', 2.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('60b7c93a-3323-4b4c-8764-2874754e0379', 'Geochelone elegans', 970.8, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Beauty', 'http://dummyimage.com/135x100.png/cc0000/ffffff', 3.4, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d01e138d-e5a4-4372-9538-5ecb03031497', 'Castor canadensis', 708.81, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Clothing', 'http://dummyimage.com/117x100.png/ff4444/ffffff', 1.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('44cecd44-9df7-422e-abb3-09850b1fac93', 'Nectarinia chalybea', 438.66, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Music', 'http://dummyimage.com/156x100.png/dddddd/000000', 4.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('7310e788-3239-433b-b156-ec17270f8f30', 'Uraeginthus granatina', 109.32, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Grocery', 'http://dummyimage.com/196x100.png/dddddd/000000', 1.4, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('357b8289-ae4c-4a52-9023-07f9bec8ad52', 'Loxodonta africana', 835.82, 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Jewelry', 'http://dummyimage.com/118x100.png/5fa2dd/ffffff', 3.8, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('669677ae-7fc0-468c-b57e-bf2b24a9b5e9', 'Haliaeetus leucocephalus', 918.04, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Kids', 'http://dummyimage.com/231x100.png/ff4444/ffffff', 4.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('714034c4-7515-4a08-abc1-0e3ceb1ce2e2', 'Mazama gouazoubira', 184.99, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Computers', 'http://dummyimage.com/179x100.png/5fa2dd/ffffff', 3.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('fc5f0e07-0bee-4afc-a1fa-d18cdc01880b', 'Antidorcas marsupialis', 610.6, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Health', 'http://dummyimage.com/135x100.png/ff4444/ffffff', 4.7, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('363dc680-c93d-444f-8175-33bede57a9d4', 'Varanus komodensis', 590.1, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'Books', 'http://dummyimage.com/165x100.png/dddddd/000000', 4.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('716d2f20-9157-4b32-a52f-38e6e5427ee7', 'Prionace glauca', 137.95, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'Home', 'http://dummyimage.com/237x100.png/dddddd/000000', 4.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('2e341547-86e9-4fa3-b644-852946c50434', 'Redunca redunca', 772.34, 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'Home', 'http://dummyimage.com/242x100.png/dddddd/000000', 3.0, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('66127a07-b74f-46c1-be6f-19dcf8c08ce4', 'Dasyurus viverrinus', 414.37, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Kids', 'http://dummyimage.com/151x100.png/5fa2dd/ffffff', 4.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('13d951cc-6ad4-45d6-b9b2-b448e44fa524', 'Anas punctata', 678.08, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'Kids', 'http://dummyimage.com/168x100.png/ff4444/ffffff', 3.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('7103b1a5-4fb9-43a9-a23a-19456d062e99', 'Trichoglossus chlorolepidotus', 202.61, 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'Electronics', 'http://dummyimage.com/211x100.png/ff4444/ffffff', 4.4, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d9c381e1-fe24-4d6a-b397-71cef0ac1493', 'Thylogale stigmatica', 28.63, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Shoes', 'http://dummyimage.com/250x100.png/cc0000/ffffff', 2.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('4adb8924-54ac-4889-bcf8-f15b7c21065f', 'Canis dingo', 408.78, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Books', 'http://dummyimage.com/173x100.png/dddddd/000000', 2.1, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('ac5e233f-09cb-4e3c-bfab-c487c34c9fc2', 'Stenella coeruleoalba', 64.5, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Toys', 'http://dummyimage.com/128x100.png/cc0000/ffffff', 2.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('de667fe0-70dc-4b03-9fa3-508807f4fb17', 'Junonia genoveua', 495.37, 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'Jewelry', 'http://dummyimage.com/213x100.png/cc0000/ffffff', 1.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('a9a589e2-4bf8-4ff4-997f-082d2d4a3a92', 'Cereopsis novaehollandiae', 524.06, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'Computers', 'http://dummyimage.com/134x100.png/cc0000/ffffff', 4.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('534cfa14-fe48-4a32-b57d-99e718d2304e', 'Crotalus cerastes', 555.26, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Grocery', 'http://dummyimage.com/118x100.png/cc0000/ffffff', 1.9, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('ccf145af-98f9-4777-9b9a-d3b1fbd3d542', 'Leptoptilus dubius', 537.52, 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Baby', 'http://dummyimage.com/122x100.png/5fa2dd/ffffff', 4.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('8e6cf67e-c625-4020-9ae3-6883cad72928', 'Echimys chrysurus', 111.45, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'Tools', 'http://dummyimage.com/220x100.png/5fa2dd/ffffff', 4.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c02477c0-77c7-401e-b8db-a3a0b626a2ae', 'Cervus unicolor', 489.43, 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Garden', 'http://dummyimage.com/132x100.png/cc0000/ffffff', 3.4, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('2a9b3cae-a2ef-4174-8991-b8501bad8bdd', 'Zenaida asiatica', 933.29, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Jewelry', 'http://dummyimage.com/115x100.png/dddddd/000000', 2.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('59f3ea15-e12b-4e40-8df5-a2db3c554c98', 'Felis silvestris lybica', 934.3, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'Movies', 'http://dummyimage.com/220x100.png/5fa2dd/ffffff', 4.9, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('a9d121c8-ae0e-4a9f-aae3-aeab175a142c', 'Mabuya spilogaster', 613.48, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'Automotive', 'http://dummyimage.com/125x100.png/ff4444/ffffff', 1.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('96089f09-abaf-43f3-b936-b792ae5ca4bc', 'Choloepus hoffmani', 182.79, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Movies', 'http://dummyimage.com/213x100.png/5fa2dd/ffffff', 1.9, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('5c3d1161-aa70-4fd7-84b5-3ab76f307c44', 'Otaria flavescens', 995.92, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Tools', 'http://dummyimage.com/135x100.png/ff4444/ffffff', 2.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('30c7a96f-28d9-4701-a58a-f487f8255477', 'Gerbillus sp.', 348.67, 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 'Music', 'http://dummyimage.com/129x100.png/dddddd/000000', 2.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('a2dcad4f-ae93-4f19-88c0-614108c5d7a8', 'Eutamias minimus', 227.56, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Tools', 'http://dummyimage.com/144x100.png/cc0000/ffffff', 2.1, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('ffbee1c5-210e-4b74-8532-d691463f4aed', 'Haliaeetus leucocephalus', 289.21, 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'Games', 'http://dummyimage.com/210x100.png/cc0000/ffffff', 2.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('3bad4c41-5482-4287-95dd-4e8a01ab99df', 'Phalacrocorax niger', 45.27, 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Garden', 'http://dummyimage.com/171x100.png/ff4444/ffffff', 4.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('273f89db-76da-4a5e-8999-48ee384aac4e', 'Bucorvus leadbeateri', 199.97, 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'Sports', 'http://dummyimage.com/235x100.png/ff4444/ffffff', 4.7, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c7f11d85-28ea-40e4-865a-7cc2a48d6086', 'Dendrocygna viduata', 181.99, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'Toys', 'http://dummyimage.com/242x100.png/ff4444/ffffff', 4.1, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('f7a8cffa-07f0-4eef-b4c3-24621e697e10', 'Damaliscus dorcas', 590.55, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Industrial', 'http://dummyimage.com/181x100.png/dddddd/000000', 4.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('bfb9bb52-3407-4aa7-aaa5-41503b670f7d', 'Phascogale tapoatafa', 910.02, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Clothing', 'http://dummyimage.com/183x100.png/cc0000/ffffff', 4.4, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('dd2991a2-067d-4b87-80a1-94ff3294000e', 'Phalacrocorax brasilianus', 925.36, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Beauty', 'http://dummyimage.com/241x100.png/cc0000/ffffff', 1.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('684b62e1-73c4-4cf8-8836-dd5d680a91f2', 'Sarcophilus harrisii', 423.37, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Tools', 'http://dummyimage.com/181x100.png/cc0000/ffffff', 2.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('9593e2fc-9eb3-42f5-834c-7c7e29cea66b', 'Hyaena brunnea', 121.82, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'Shoes', 'http://dummyimage.com/101x100.png/dddddd/000000', 5.0, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('b78ad0f9-e3e7-489a-8a50-d1eb9054d0e6', 'Felis concolor', 520.33, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Grocery', 'http://dummyimage.com/237x100.png/cc0000/ffffff', 1.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('792cba4f-d78d-406e-aeb0-b305fef170ad', 'Paraxerus cepapi', 638.86, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Shoes', 'http://dummyimage.com/142x100.png/cc0000/ffffff', 4.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('cb80f150-c88b-45f9-84ff-16a74dd0efa3', 'Buteo galapagoensis', 386.1, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Games', 'http://dummyimage.com/222x100.png/dddddd/000000', 4.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('1f1872d5-8b4b-4256-aa06-c149bd8ed2e7', 'Meleagris gallopavo', 419.87, 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Garden', 'http://dummyimage.com/228x100.png/5fa2dd/ffffff', 3.2, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d2787414-ac81-420b-b68e-56c91e48d542', 'Tachybaptus ruficollis', 883.29, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'Books', 'http://dummyimage.com/191x100.png/5fa2dd/ffffff', 2.1, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('9ad6ca08-d750-41a7-8842-6fd50bc3a634', 'unavailable', 510.75, 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'Clothing', 'http://dummyimage.com/239x100.png/ff4444/ffffff', 1.5, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c19b2730-1da1-4cfa-8772-15e5fbe1f674', 'Zalophus californicus', 598.27, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'Tools', 'http://dummyimage.com/181x100.png/cc0000/ffffff', 3.7, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('61dd49da-b5db-4717-8202-72b1eebd272d', 'Crotaphytus collaris', 243.59, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'Clothing', 'http://dummyimage.com/245x100.png/5fa2dd/ffffff', 3.8, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d14e1698-3159-47b7-936c-4e43c04db738', 'Cervus elaphus', 244.37, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Games', 'http://dummyimage.com/171x100.png/ff4444/ffffff', 4.3, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('4d67ad7c-28fd-45d8-af9a-36e4fdbc186d', 'Porphyrio porphyrio', 663.04, 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 'Home', 'http://dummyimage.com/230x100.png/dddddd/000000', 2.5, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('e300b837-7473-4819-8e28-961b784d3856', 'Thamnolaea cinnmomeiventris', 972.11, 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'Health', 'http://dummyimage.com/216x100.png/cc0000/ffffff', 2.0, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('97031e0d-b73c-44e1-8e51-39608196ef9c', 'Felis chaus', 415.77, 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'Movies', 'http://dummyimage.com/167x100.png/cc0000/ffffff', 4.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('46dfcc3c-9e50-4dc5-85cc-6dc084517460', 'Coracias caudata', 791.75, 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'Health', 'http://dummyimage.com/171x100.png/ff4444/ffffff', 4.2, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('567d03dc-fdbb-44fc-886e-4881ef411d69', 'Taurotagus oryx', 521.5, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 'Industrial', 'http://dummyimage.com/166x100.png/dddddd/000000', 3.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('4f3eb127-1477-46fb-aebe-c4c36ecff73c', 'Oreamnos americanus', 361.34, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Industrial', 'http://dummyimage.com/222x100.png/cc0000/ffffff', 3.2, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d9d23413-3b07-47a6-b9e8-7686a5904b5b', 'Phoenicopterus ruber', 444.43, 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Kids', 'http://dummyimage.com/234x100.png/dddddd/000000', 3.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('1953ace6-c749-4ab6-aa21-0e30b57197fc', 'Meles meles', 712.92, 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'Music', 'http://dummyimage.com/190x100.png/ff4444/ffffff', 2.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('f4ef0e6e-4b5c-4372-b124-7b6e167b2e39', 'Bubalornis niger', 498.13, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Games', 'http://dummyimage.com/233x100.png/ff4444/ffffff', 1.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('b5da1205-9d11-4f9b-9646-046b6ab91e4b', 'Ictalurus furcatus', 923.01, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'Tools', 'http://dummyimage.com/175x100.png/5fa2dd/ffffff', 3.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('6ecb4c9a-2400-488a-b154-a8f349e1e8fc', 'Plegadis ridgwayi', 385.92, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Movies', 'http://dummyimage.com/106x100.png/cc0000/ffffff', 3.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('0bbb36fa-c5b9-4e96-8dd7-2307327c8868', 'Vulpes vulpes', 639.76, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Clothing', 'http://dummyimage.com/124x100.png/cc0000/ffffff', 3.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('ad5c40c6-a6b0-4fa0-b52f-6e05632cf059', 'Mephitis mephitis', 372.3, 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'Health', 'http://dummyimage.com/121x100.png/cc0000/ffffff', 3.8, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('e3ad7026-a2b6-45f0-9986-c38f4378c69d', 'Junonia genoveua', 767.73, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Sports', 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 2.8, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('b7eb185a-7505-40e2-9643-194bf61e5ae9', 'Gazella thompsonii', 205.82, 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 'Automotive', 'http://dummyimage.com/104x100.png/dddddd/000000', 3.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('2ab93935-10b5-4286-b125-103a46515901', 'Bos mutus', 651.7, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Jewelry', 'http://dummyimage.com/243x100.png/dddddd/000000', 3.1, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c2f8b920-6ba3-4bca-9d0e-fa6284fb76e8', 'Varanus sp.', 69.0, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Books', 'http://dummyimage.com/216x100.png/dddddd/000000', 1.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('61f9e32c-ffe2-4b51-8afa-6025e30c46aa', 'Coluber constrictor', 985.7, 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'Shoes', 'http://dummyimage.com/109x100.png/ff4444/ffffff', 3.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('fc81a5fe-2365-4e5d-8e8a-78a7e643eb70', 'Columba palumbus', 352.3, 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Electronics', 'http://dummyimage.com/110x100.png/ff4444/ffffff', 4.8, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('7fc20cb5-329b-422c-923c-629c29d2faff', 'Cebus albifrons', 43.38, 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Industrial', 'http://dummyimage.com/223x100.png/5fa2dd/ffffff', 3.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('410a01c6-f1b5-4100-8529-7a2451289fd1', 'Lasiodora parahybana', 931.17, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Jewelry', 'http://dummyimage.com/218x100.png/dddddd/000000', 2.7, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c25fedc3-b02f-4d9a-99c6-0456afba572d', 'Ratufa indica', 558.26, 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 'Kids', 'http://dummyimage.com/185x100.png/5fa2dd/ffffff', 2.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c01a4c07-56c0-479b-9088-492b5e327759', 'Pelecanus occidentalis', 844.34, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'Jewelry', 'http://dummyimage.com/175x100.png/dddddd/000000', 2.9, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('e2e967ff-8f7d-46ff-953f-cef871fe72e9', 'Bassariscus astutus', 325.49, 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'Home', 'http://dummyimage.com/194x100.png/5fa2dd/ffffff', 3.3, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('39f8c40e-ab65-4312-9f36-9800f90ab129', 'Paradoxurus hermaphroditus', 782.22, 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Computers', 'http://dummyimage.com/123x100.png/ff4444/ffffff', 1.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('87c63f00-78b4-451e-9781-79efd65cfbd4', 'Erethizon dorsatum', 151.72, 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'Games', 'http://dummyimage.com/200x100.png/ff4444/ffffff', 2.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('6685d5a8-2ce5-4b14-8b84-60af697faf1f', 'Eutamias minimus', 486.84, 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'Tools', 'http://dummyimage.com/167x100.png/5fa2dd/ffffff', 3.2, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('c3e3d527-9536-42b3-99ed-e53d7f90ddde', 'Oncorhynchus nerka', 656.78, 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 'Health', 'http://dummyimage.com/154x100.png/dddddd/000000', 1.8, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('615e2ef1-81e2-4912-8e08-8539a6244258', 'Streptopelia senegalensis', 727.42, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'Jewelry', 'http://dummyimage.com/227x100.png/ff4444/ffffff', 4.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('9f280995-13ed-403c-84ed-affb99af96a9', 'Bucephala clangula', 160.83, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Sports', 'http://dummyimage.com/195x100.png/cc0000/ffffff', 2.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('dcad1455-2ab4-4e7b-8c2a-d658ff7fcf39', 'Junonia genoveua', 272.37, 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'Tools', 'http://dummyimage.com/113x100.png/5fa2dd/ffffff', 4.5, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d5629dc6-5332-46f0-a36e-410c1802bb6e', 'Lasiodora parahybana', 748.26, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Clothing', 'http://dummyimage.com/218x100.png/ff4444/ffffff', 4.6, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('2fb22e88-13ad-48c8-bd63-ec960c811463', 'unavailable', 967.69, 'Fusce consequat. Nulla nisl. Nunc nisl.', 'Movies', 'http://dummyimage.com/181x100.png/dddddd/000000', 3.6, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('359bed6a-66c3-4315-a25b-e19caec8573a', 'Phylurus milli', 837.52, 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Jewelry', 'http://dummyimage.com/124x100.png/cc0000/ffffff', 2.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('3eb3b023-d805-4e47-88fb-f3c0e93b1c29', 'Myiarchus tuberculifer', 908.64, 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'Movies', 'http://dummyimage.com/214x100.png/5fa2dd/ffffff', 3.9, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('a4514dd4-2a64-4efd-bdae-304b5f9c1195', 'Dipodomys deserti', 780.15, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Garden', 'http://dummyimage.com/170x100.png/dddddd/000000', 3.2, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('f9aeff14-e197-41b4-b318-df60c4beb9f8', 'Lemur fulvus', 625.93, 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'Sports', 'http://dummyimage.com/247x100.png/cc0000/ffffff', 2.7, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('bcbac701-6e3a-4f8b-8940-c0354192e520', 'Bos taurus', 920.03, 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'Movies', 'http://dummyimage.com/180x100.png/5fa2dd/ffffff', 5.0, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('bdf5c39b-304b-40bc-9fc6-3fa51f95d0ee', 'Himantopus himantopus', 998.94, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Electronics', 'http://dummyimage.com/146x100.png/dddddd/000000', 4.3, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('15861765-06fc-44d8-af4d-912e6edc378e', 'Junonia genoveua', 129.03, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'Beauty', 'http://dummyimage.com/142x100.png/cc0000/ffffff', 1.4, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('52f6df48-7b5f-49cb-bb63-cc13a054553a', 'Myotis lucifugus', 348.64, 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'Automotive', 'http://dummyimage.com/212x100.png/ff4444/ffffff', 3.0, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('a992af9c-e874-4983-a58c-7b0acac65afa', 'Phascogale tapoatafa', 546.92, 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'Tools', 'http://dummyimage.com/241x100.png/cc0000/ffffff', 1.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d3c6d156-6169-49b2-b2dc-8d79421d7d63', 'Lamprotornis nitens', 657.23, 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'Toys', 'http://dummyimage.com/161x100.png/dddddd/000000', 1.0, 0);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('d5e3be03-1e51-41c7-a0c5-6608c4df2af4', 'Lepilemur rufescens', 732.39, 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'Automotive', 'http://dummyimage.com/110x100.png/cc0000/ffffff', 4.3, 1);
insert into products (id, title, price, description, category, image, rating_rate, rating_count) values ('e6c517f9-21e3-4183-8941-386719cac1f3', 'Ceratotherium simum', 104.33, 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'Clothing', 'http://dummyimage.com/239x100.png/dddddd/000000', 1.9, 1);

SELECT * FROM products;
