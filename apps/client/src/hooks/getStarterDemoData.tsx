import * as React from 'react';
const demoProducts = [
    {
      "id": "c31f955e-4b45-4d81-85b2-cdca60263317",
      "title": "WOMEN'S HAPPY WAVES LONG SLEEVE TEE",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Best-Things-Sea-Turtle-Beach-Short-Sleeve-CrusherLITE-Tee_92681_1_lg.png",
      "category": "tees",
      "price": 34.50,
      "rating_rate": 2.2,
      "rating_count": 305
    },
    {
      "id": "eb3eacfb-5570-4008-98bc-57714273c583",
      "title": "WOMEN'S TIE DYE I LIKE IT HERE SHORT SLEEVE VEE",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Tie-Dye-I-Like-It-Here-Short-Sleeve-CrusherLITE-Vee_90451_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 1.5,
      "rating_count": 101
    },
    {
      "id": "feba3f40-321d-480f-a98b-1c6f5b3d551f",
      "title": "WOMEN'S TIE DYE I LIKE IT HERE SLEEVELESS HIGH-LOW TANK",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Tie-Dye-I-Like-It-Here-Sleeveless-HighLow-Crusher-Tank_100569_1_lg.png",
      "category": "tees",
      "price": 24.50,
      "rating_rate": 5,
      "rating_count": 142
    },
    {
      "id": "d03b7a61-b4fa-4dbf-a4c8-7ba34e86ed89",
      "title": "WOMEN'S OCEAN VISTA CRUSHER VEE",
      "description": "Instant classics don't just happen. We've spent over 20 years perfecting our original Crusher Tee, and its laid-back style has the staying power to prove it. Washed for everyday softness, this v-neck customer favorite barely skims the body for a look that's as easygoing as you are.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Ocean-Vista-Short-Sleeve-Crusher-Vee_92289_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 4.3,
      "rating_count": 330
    },
    {
      "id": "07ce871b-5a7a-4dd2-a779-8bef789cdc9b",
      "title": "WOMEN'S MANDALA TURTLE SHORT SLEEVE VEE",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Mandala-Turtle-Crusher-Vee_93622_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 3.2,
      "rating_count": 281
    },
    {
      "id": "b31b09ba-838e-4d04-b0ab-53befeb1bfb0",
      "title": "WOMEN'S TAKE ME TO THE OCEAN WATERCOLOR CRUSHER VEE",
      "description": "Instant classics don't just happen. We've spent over 20 years perfecting our original Crusher Tee, and its laid-back style has the staying power to prove it. Washed for everyday softness, this v-neck customer favorite barely skims the body for a look that's as easygoing as you are.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Take-Me-to-the-Ocean-Watercolor-Short-Sleeve-Crusher-Vee_98578_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 1,
      "rating_count": 92
    },
    {
      "id": "0bf42e93-676d-4f16-8ab7-b8b5f0c45437",
      "title": "WOMEN'S BEACH WORD GAME SHORT SLEEVE TEE",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Beach-Word-Game-Short-Sleeve-Crusher-Tee_96827_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 0.7,
      "rating_count": 110
    },
    {
      "id": "cbde06e3-cae0-4b19-bd0f-5e7ee6c15f48",
      "title": "WOMEN'S EVERY LITTLE THING FLAMINGO SHORT SLEEVE VEE",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e429.50jr3mxnm3.cloudfront.net/Womens-Every-Little-Thing-Flamingo-Short-Sleeve-Crusher-Vee_90449_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 2.3,
      "rating_count": 163
    },
    {
      "id": "b0f45b56-37df-43e9-b6c9-17a7ac8f7d5f",
      "title": "WOMEN'S TAKE ME TO THE OCEAN WATERCOLOR SLEEVELESS HIGH-LOW TANK",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Womens-Take-Me-to-the-Ocean-Watercolor-Sleeveless-HighLow-CrusherLITE-Tank_101602_1_lg.png",
      "category": "tees",
      "price": 24.50,
      "rating_rate": 3.1,
      "rating_count": 278
    },
    {
      "id": "2edae7bc-601c-408b-8e66-26ddf6cdf93e",
      "title": "MEN'S JAKE AND ROCKET BEACH 4X4 SHORT SLEEVE TEE",
      "description": "Soft, comfy, and made to last. Our Crusher Tees are made for all-day comfort with a feels-like-you-had-it forever fit. Choose between our original heavyweight Crusher Tee or the new lightweight and layer-able Crusher-Lite.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-and-Rocket-Beach-4x4-Short-Sleeve-CrusherLITE-Tee_93117_1_lg.png",
      "category": "tees",
      "price": 24.99,
      "rating_rate": 0.2,
      "rating_count": 249
    },
    {
      "id": "673c4827-5726-4861-a1a9-8f3f430fbb63",
      "title": "MEN'S JAKE AND ROCKET BEST DUSK CRUSHER TEE",
      "description": "Instant classics don't just happen. We've spent over 20 years perfecting our original Crusher Tee, and its laid-back style has the staying power to prove it. Washed for everyday softness, this classic fit customer favorite barely skims the body for a look that's as easygoing as you are.",
      "image": "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-and-Rocket-Best-Dusk-Short-Sleeve-Crusher-Tee_98550_1_lg.png",
      "category": "tees",
      "price": 29.50,
      "rating_rate": 0.4,
      "rating_count": 398
    },
    {
      "id": "6e80f63f-0257-4a68-ac01-61f2e42c4a47",
      "title": "Coral reef T-Shirt",
      "description": "Global Organic Textile Standard (GOTS) Certified, the worldwide leading standard for organic textiles like cotton. GOTS certification ensures our cotton is pure and ethically sourced and is made without chemical pesticides, forced labor, child labor, or unfair wages.",
      "image": "https://res.cloudinary.com/teepublic/image/private/s--OqOymQp7--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-21,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-416,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1446226441/production/designs/203963_1.jpg",
      "category": "tees",
      "price": 24.99,
      "rating_rate": 2,
      "rating_count": 160,
      "sale_price": 20.75
    },
    {
      "id": "f487e3ce-9064-445d-b427-09eb55318fd3",
      "title": "CORAL REEF ID TEE",
      "description": "Made in California from 100% ringspun organic cotton and screen printed using bio-based, renewable algae ink, providing a soft hand feel and excellent wash durability. At large-scale production, algae black pigments are carbon negative! Algae absorb atmospheric carbon dioxide and that carbon gets locked into the bio-based black pigment for over 100 years.",
      "image": "https://cdn.shopify.com/s/files/1/0137/6210/1348/products/waterlust-coral-reef-id-tee-28162804252708_5000x.jpg?v=1628075438",
      "category": "tees",
      "price": 29.00,
      "rating_rate": 0.9,
      "rating_count": 98
    },
    {
      "id": "12f0853f-f355-4548-bfb2-92c90151b8ac",
      "title": "Save The Ocean Keep The Sea Plastic Free Turtle T-Shirt",
      "description": "This Save The Ocean Keep The Sea Plastic Free Turtle has a great environmental message for those looking for a save the ocean design.",
      "image": "https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81XiZ8-%2BJ7L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
      "category": "tees",
      "price": 21.99,
      "rating_rate": 4.4,
      "rating_count": 110,
      "sale_price": 1.5
    },
    {
      "id": "bfc66e5f-7edd-45d3-85e6-048c9be397fc",
      "title": "Save Our Oceans Sea Turtle Pro Environment Nature Earth Day T-Shirt",
      "description": "This Earth Day Apparel for men, women and kids features a Save Our Oceans quote and a sea turtle design for nature activists, teachers and students who want to fight climate change and global warming, keep our environment clean and planet green everyday.",
      "image": "https://m.media-amazon.com/images/I/71GvdrCXj2L._AC_SS260_.jpg",
      "category": "tees",
      "price": 17.99,
      "rating_rate": 3.1,
      "rating_count": 354,
      "sale_price": 3.4
    },
    {
      "id": "43b043e4-76cb-44c6-ac6c-b2a37098cc5a",
      "title": "SMILEY® WATER THE PLANET T-SHIRT",
      "description": "WATER THE EARTH, REBUILD NATURE!",
      "image": "https://cdn.shopify.com/s/files/1/1522/4434/products/SMILEY-WATER-THE-EARTH-T-SHIRT-BLACK-399000999-02.jpg?v=1645571102&width=1946",
      "category": "tees",
      "price": 40.00,
      "rating_rate": 4.8,
      "rating_count": 314,
      "sale_price": 35.99
    },
    {
      "id": "613d9954-1a44-4315-abae-6f276770199d",
      "title": "Worlds Best Planet",
      "description": "Well.... I picked this mug out myself, but know the other planets totally agree! Show your love for planet Earth in this cobalt blue TeeTurtle original Worlds Best Planet",
      "image": "https://12ax7web.s3.amazonaws.com/accounts/1/products/1986199881454/Worlds-Best-Planet-TT_Shirt_800x800-10-1000x1000.jpg",
      "category": "tees",
      "price": 15.99,
      "rating_rate": 2.1,
      "rating_count": 104
    },
    {
      "id": "0289dd91-351a-4b95-8791-82d89d5966e7",
      "title": "I Like Turtles Shirt Tortoise T-Shirt",
      "description": "The Best Shirt Ever. Please Buy.",
      "image": "https://res.cloudinary.com/teepublic/image/private/s--RBJdOoqX--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1472657878/production/designs/659649_1.jpg",
      "category": "tees",
      "price": 14.00,
      "rating_rate": 4.1,
      "rating_count": 365
    },
    {
      "id": "272c4dae-4590-4fdc-97c7-2b1529c04a95",
      "title": "LookHUMAN Squid Attack T-Shirts",
      "description": "Our fitted Unisex Cotton tee is made from an exceedingly soft 100% ring spun cotton. It features a crew neckline with hemmed sleeves and bottom for durability. Preshrunk for your convenience! Printed in the USA. Made with 100% Ring Spun Cotton. Athletic Gray is made up of 90% cotton and 10% polyester. Other heathered colors are made of 52% cotton and 48% polyester.",
      "image": "https://images.lookhuman.com/render/standard/0040282050128606/3600-athletic_gray-md-t-squid-attack.jpg",
      "category": "tees",
      "price": 21.99,
      "rating_rate": 3.7,
      "rating_count": 320,
      "sale_price": 18.99
    },
    {
      "id": "6eb449e3-0d90-4799-a2a7-66ee2f8f1fad",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 75.99,
      "rating_rate": 2.6,
      "rating_count": 69
    },
    {
      "id": "0b342a6c-337f-4ffd-a6b9-f18301078d64",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 55.99,
      "rating_rate": 4.1,
      "rating_count": 55
    },
    {
      "id": "d1968d47-53aa-4292-8e86-be725e1a72a3",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 89.99,
      "rating_rate": 1.3,
      "rating_count": 143
    },
    {
      "id": "4ff28bda-7453-46ae-8b4b-4ba4aa50a655",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 5.99,
      "rating_rate": 4.2,
      "rating_count": 152
    },
    {
      "id": "d8126385-d58a-428e-87f4-a7912958af06",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 85.99,
      "rating_rate": 2.5,
      "rating_count": 34
    },
    {
      "id": "04753253-d82e-40d4-942c-be415dee23d5",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 45.99,
      "rating_rate": 1.8,
      "rating_count": 127,
      "sale_price": 4.6
    },
    {
      "id": "8208f551-6221-47c0-89d2-f268d7b15991",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 19.99,
      "rating_rate": 3.8,
      "rating_count": 298
    },
    {
      "id": "26417bee-aaa4-4402-aa11-ffa47642e5d4",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 29.99,
      "rating_rate": 3.1,
      "rating_count": 255,
      "sale_price": 11.4
    },
    {
      "id": "f8deb59f-2009-4c63-80d2-ef0fed5cc2af",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 9.99,
      "rating_rate": 3.5,
      "rating_count": 311
    },
    {
      "id": "a2d04937-0c62-443c-94c6-7e0faeb233b5",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 59.99,
      "rating_rate": 3.7,
      "rating_count": 141
    },
    {
      "id": "e150a649-fa02-4003-987e-e1ea74d273da",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 99.99,
      "rating_rate": 4.2,
      "rating_count": 170
    },
    {
      "id": "78e3c8f6-25b9-444b-845a-ccd1845aa4d7",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 74.99,
      "rating_rate": 0.5,
      "rating_count": 232
    },
    {
      "id": "78860e0b-dce4-4985-8e42-c9c50ff0c239",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 55.99,
      "rating_rate": 2.4,
      "rating_count": 139
    },
    {
      "id": "d0ac3a5c-ea1e-4c3d-be07-71b8816fde48",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 5.99,
      "rating_rate": 2.6,
      "rating_count": 314
    },
    {
      "id": "91494d2b-0241-460f-97eb-ed81d35a1c94",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 55.99,
      "rating_rate": 4.3,
      "rating_count": 151
    },
    {
      "id": "cc499a88-4d41-451c-8ca6-98f8a9a0ae30",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 59.99,
      "rating_rate": 0.5,
      "rating_count": 304,
      "sale_price": 12.6
    },
    {
      "id": "d8a86912-dba3-4947-ac69-37bcc2c1ea55",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 9.99,
      "rating_rate": 1,
      "rating_count": 273
    },
    {
      "id": "b9e7b289-7466-4838-8cd0-7dd9b54886b6",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 85.99,
      "rating_rate": 3.6,
      "rating_count": 390
    },
    {
      "id": "51d296a2-567f-46c9-a4d8-a13744b9b6b7",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 85.99,
      "rating_rate": 3,
      "rating_count": 108
    },
    {
      "id": "f906695e-e0d3-4a3a-8956-b47d3b868605",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hoodies",
      "price": 59.99,
      "rating_rate": 3.8,
      "rating_count": 241,
      "sale_price": 23.4
    },
    {
      "id": "39e540e6-7b4c-4fc2-b970-699fcb604675",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 24.99,
      "rating_rate": 1.2,
      "rating_count": 120,
      "sale_price": 4.5
    },
    {
      "id": "e7c4e7a6-56ef-4aa4-9acd-bca106eb1a38",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 15.99,
      "rating_rate": 2,
      "rating_count": 109
    },
    {
      "id": "228fa38f-94c1-4aa3-bea7-1342b3cf86a5",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 59.99,
      "rating_rate": 1,
      "rating_count": 178
    },
    {
      "id": "bbedede5-dce6-43aa-ad16-71947fee7d2e",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 9.99,
      "rating_rate": 4.5,
      "rating_count": 291
    },
    {
      "id": "8c8d38ed-0019-4d07-a06a-764191bc802f",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 85.99,
      "rating_rate": 1.9,
      "rating_count": 4
    },
    {
      "id": "ad499218-45df-42e6-a8da-906bb9c02d52",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 4.99,
      "rating_rate": 3.5,
      "rating_count": 4
    },
    {
      "id": "a3f278a1-8dcc-452b-868a-55ea14eeee85",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 4.99,
      "rating_rate": 3.4,
      "rating_count": 36
    },
    {
      "id": "b8329f58-6bd1-47e7-8d36-d9380b34938a",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 49.99,
      "rating_rate": 4.9,
      "rating_count": 398
    },
    {
      "id": "1a558a29-c20f-4df9-87b4-33f523c6aa73",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 15.99,
      "rating_rate": 3.1,
      "rating_count": 336
    },
    {
      "id": "cfdecb41-8ad1-42bc-bd10-59b24443e961",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 74.99,
      "rating_rate": 3.2,
      "rating_count": 267,
      "sale_price": 9.75
    },
    {
      "id": "cad372c7-b82c-4561-8879-2b162c6c1cc7",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 29.99,
      "rating_rate": 1.6,
      "rating_count": 221
    },
    {
      "id": "a03181eb-c60e-4620-adce-498bc5000cb4",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 49.99,
      "rating_rate": 1.1,
      "rating_count": 60
    },
    {
      "id": "c6edf4b7-6dcb-4e0b-90ef-87d803aece6b",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 14.99,
      "rating_rate": 3.9,
      "rating_count": 291
    },
    {
      "id": "f1d5f595-9438-4c1f-ab09-88479e6e9a5c",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 89.99,
      "rating_rate": 1.4,
      "rating_count": 144
    },
    {
      "id": "50d5fcc4-0919-4feb-abbd-e73174af2755",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 29.99,
      "rating_rate": 3.9,
      "rating_count": 243
    },
    {
      "id": "27f5b1fc-0dbc-4990-a9e1-79b35044f4a9",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 14.99,
      "rating_rate": 2,
      "rating_count": 331
    },
    {
      "id": "49d79c39-7a5b-4cf1-a3dc-a6b459e0a021",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 55.99,
      "rating_rate": 2.1,
      "rating_count": 319
    },
    {
      "id": "773ba84e-5df1-403f-86c8-5492c2410edf",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 44.99,
      "rating_rate": 1.3,
      "rating_count": 312
    },
    {
      "id": "6aba7b48-dceb-43f8-863d-1bb4ae42a7b5",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 19.99,
      "rating_rate": 1.5,
      "rating_count": 223
    },
    {
      "id": "220b03d5-5b85-4b20-a386-c6569f5a59bb",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "hats",
      "price": 25.99,
      "rating_rate": 3.5,
      "rating_count": 392
    },
    {
      "id": "5dd7b90e-7f5e-48e6-aa6e-c91e92e7666e",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 69.99,
      "rating_rate": 0.5,
      "rating_count": 269
    },
    {
      "id": "fdb903d8-44e6-41e7-a717-17a71553ef6c",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 54.99,
      "rating_rate": 4.2,
      "rating_count": 54
    },
    {
      "id": "b6bc2825-087b-4527-b100-363a60693185",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 39.99,
      "rating_rate": 2.7,
      "rating_count": 10
    },
    {
      "id": "be8f3483-7de2-41e5-a65b-0c384ac15dd3",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 79.99,
      "rating_rate": 1.6,
      "rating_count": 278
    },
    {
      "id": "25d16ed4-ab83-40a7-9ebf-2277f9223aaa",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 4.99,
      "rating_rate": 4.8,
      "rating_count": 386
    },
    {
      "id": "6e3cd309-307d-4eb8-bfaf-d68f17ffbe48",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 9.99,
      "rating_rate": 0.4,
      "rating_count": 72,
      "sale_price": 3.4
    },
    {
      "id": "8a9cc075-5f81-4a2f-aa9c-8947dbc97f7f",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 89.99,
      "rating_rate": 3.6,
      "rating_count": 244
    },
    {
      "id": "eac00fe8-ca54-47a1-9d17-5df0ab8ee1fe",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 95.99,
      "rating_rate": 4.3,
      "rating_count": 177
    },
    {
      "id": "268e7341-1693-4b79-bfed-caf1ffe351c9",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 34.99,
      "rating_rate": 2.4,
      "rating_count": 109
    },
    {
      "id": "1591b0d7-c076-4088-bc88-60c611fd88b5",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 34.99,
      "rating_rate": 4.8,
      "rating_count": 241,
      "sale_price": 11.2
    },
    {
      "id": "c751b72f-af87-4013-89a1-e132149e123c",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 19.99,
      "rating_rate": 3.4,
      "rating_count": 148
    },
    {
      "id": "26fd2a25-cd8b-41a9-b9a5-0dc6974f1ece",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 15.99,
      "rating_rate": 4.9,
      "rating_count": 349
    },
    {
      "id": "f7a30299-f469-4e18-97f0-2415d952ddb4",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 89.99,
      "rating_rate": 3.7,
      "rating_count": 322,
      "sale_price": 18
    },
    {
      "id": "61cd69ef-de9a-4b10-964a-d4e24d17c190",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 64.99,
      "rating_rate": 2,
      "rating_count": 206
    },
    {
      "id": "0ce3469f-a723-4379-a4fb-506b12985567",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 39.99,
      "rating_rate": 4.8,
      "rating_count": 50
    },
    {
      "id": "523a56e4-7ada-42c5-8998-2a877d377123",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 39.99,
      "rating_rate": 2.1,
      "rating_count": 321
    },
    {
      "id": "cf170e7a-c31d-45e2-9fbf-be658d6ffd5b",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 9.99,
      "rating_rate": 1.6,
      "rating_count": 101,
      "sale_price": 1
    },
    {
      "id": "f48be023-b343-4dc1-bccb-d392094c4e2b",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 85.99,
      "rating_rate": 3.3,
      "rating_count": 68,
      "sale_price": 28.38
    },
    {
      "id": "26bfa87b-3fd9-42b9-a184-7ed1b881b4c7",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 89.99,
      "rating_rate": 3.5,
      "rating_count": 67
    },
    {
      "id": "6b68bf0e-5727-428d-a63c-f45942b54e4f",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "decor",
      "price": 95.99,
      "rating_rate": 1.7,
      "rating_count": 63,
      "sale_price": 23.04
    },
    {
      "id": "f7857863-a371-4603-98f2-3c4a3c34abc3",
      "title": "FROG PLUS Scuba Fins",
      "description": "The Frog Plus features many of the great characteristics of a traditional paddle fin while introducing a revolutionary new blade material that is both extremely durable and nearly indestructible. The Frog Plus utilizes Cressi’s patented three material injection molding process. The three materials consist of a nice comfortable rubber on the foot pocket that extends up the side rails of the blade.",
      "image": "https://www.amazon.com/Cressi-Adult-Powerful-Efficient-Diving/dp/B079STL4KL",
      "category": "gear",
      "price": 69.99,
      "rating_rate": 1.3,
      "rating_count": 327
    },
    {
      "id": "32af2641-7486-4025-a770-bbd0a8cbf8c2",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 25.99,
      "rating_rate": 4.8,
      "rating_count": 66
    },
    {
      "id": "9d56aaff-cfc1-4954-aa85-9d5dd468c49f",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 69.99,
      "rating_rate": 4,
      "rating_count": 352,
      "sale_price": 21.7
    },
    {
      "id": "2ed61893-f1e7-427d-8b55-5051630a1696",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 84.99,
      "rating_rate": 3.8,
      "rating_count": 309,
      "sale_price": 23.8
    },
    {
      "id": "c4889483-a8c2-475d-91e9-1f84871595ee",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 4.99,
      "rating_rate": 2.7,
      "rating_count": 86
    },
    {
      "id": "a6ed8645-e01f-45a3-b2c6-159eb325ebd0",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 5.99,
      "rating_rate": 4.4,
      "rating_count": 197,
      "sale_price": 2.16
    },
    {
      "id": "b4ae1b34-5d4f-4258-b4c8-efe39623d4e1",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 39.99,
      "rating_rate": 2.4,
      "rating_count": 138
    },
    {
      "id": "deb7fefc-827b-41d3-95cb-25cc035b0b5a",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 89.99,
      "rating_rate": 2.9,
      "rating_count": 380
    },
    {
      "id": "ff89e8da-089a-484a-a992-414da15c59db",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 29.99,
      "rating_rate": 1,
      "rating_count": 354,
      "sale_price": 8.1
    },
    {
      "id": "fe5caefe-f506-4995-a993-9fe75841d6c5",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 4.99,
      "rating_rate": 0,
      "rating_count": 0
    },
    {
      "id": "cf50f4be-f2c4-4bab-9d94-13942cb0f9a2",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 39.99,
      "rating_rate": 3.1,
      "rating_count": 141
    },
    {
      "id": "09c36c49-6bdc-4aaa-b09e-476696c0b36d",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 99.99,
      "rating_rate": 1.7,
      "rating_count": 25
    },
    {
      "id": "89b2b0cc-2338-4574-976a-537ce7ab981c",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 29.99,
      "rating_rate": 4.1,
      "rating_count": 248
    },
    {
      "id": "e37b8971-51b2-4606-9700-39e6a312d234",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 65.99,
      "rating_rate": 2.8,
      "rating_count": 173
    },
    {
      "id": "184310d8-a7f7-4a4d-baa2-4fcdf3dc4c56",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 55.99,
      "rating_rate": 3.8,
      "rating_count": 348,
      "sale_price": 8.96
    },
    {
      "id": "d3dfc135-2fb2-43d9-b723-c2efc1fd2968",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 65.99,
      "rating_rate": 3.1,
      "rating_count": 31
    },
    {
      "id": "d74c7a2b-e057-4fa1-8519-5cc16ea70553",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 69.99,
      "rating_rate": 1.8,
      "rating_count": 369
    },
    {
      "id": "39a5a762-0d0c-44d8-a1ab-8208e3eeeb69",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 95.99,
      "rating_rate": 2.3,
      "rating_count": 157
    },
    {
      "id": "3b131480-fa8c-4a54-9eb6-b2221c75e056",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 34.99,
      "rating_rate": 2.1,
      "rating_count": 305
    },
    {
      "id": "c402f1f0-2863-4428-ab42-352d3ad1e9b0",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "gear",
      "price": 74.99,
      "rating_rate": 4.6,
      "rating_count": 50
    },
    {
      "id": "dbb7ece3-864c-461a-9320-f8515f2a9272",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 39.99,
      "rating_rate": 2.5,
      "rating_count": 39,
      "sale_price": 8.4
    },
    {
      "id": "46ba378c-c9e8-44ad-8de2-d318d3f19c9e",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 64.99,
      "rating_rate": 0.4,
      "rating_count": 245
    },
    {
      "id": "79a50c8a-ab46-4e32-b6a5-3a3329b4aee9",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 75.99,
      "rating_rate": 3.3,
      "rating_count": 310,
      "sale_price": 28.88
    },
    {
      "id": "40121d9a-133b-476b-a526-dfc4155d31cf",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 4.99,
      "rating_rate": 5,
      "rating_count": 377
    },
    {
      "id": "e9057396-6e42-4c94-8765-f606dad7789e",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 95.99,
      "rating_rate": 4.2,
      "rating_count": 105
    },
    {
      "id": "1ebdd39c-49b7-4701-a2aa-81ba57830860",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 35.99,
      "rating_rate": 0.6,
      "rating_count": 119
    },
    {
      "id": "56292eea-15c5-4d2b-974f-50ae1e2fe4f7",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 14.99,
      "rating_rate": 1.4,
      "rating_count": 97
    },
    {
      "id": "abe4469d-d303-4fae-a36b-5a5af892a268",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 95.99,
      "rating_rate": 3.2,
      "rating_count": 344,
      "sale_price": 12.48
    },
    {
      "id": "b5a15a92-2d21-4b59-81bd-f31cb9a5d480",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 49.99,
      "rating_rate": 0.8,
      "rating_count": 232,
      "sale_price": 16.5
    },
    {
      "id": "6b600cb2-5037-4c98-afba-fba13987ccc8",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 25.99,
      "rating_rate": 2.2,
      "rating_count": 333
    },
    {
      "id": "46e1ac93-bdd1-4c8a-8f8d-b324df3dea35",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 34.99,
      "rating_rate": 2.2,
      "rating_count": 28
    },
    {
      "id": "fb6945fc-ba5e-4d76-9b27-21ccb21d7b2c",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 84.99,
      "rating_rate": 2.8,
      "rating_count": 230
    },
    {
      "id": "6d94cb04-e839-4e5c-a070-f7e8d948d06f",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 75.99,
      "rating_rate": 3.6,
      "rating_count": 353
    },
    {
      "id": "5a004ee9-9192-4cf5-99e5-fd952db2623c",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 54.99,
      "rating_rate": 3.3,
      "rating_count": 217,
      "sale_price": 8.8
    },
    {
      "id": "ba6cb2f9-019f-4626-8168-4d9d237a11d4",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 44.99,
      "rating_rate": 2.9,
      "rating_count": 246
    },
    {
      "id": "539449db-577e-4401-9ca4-d398c863c039",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 49.99,
      "rating_rate": 4.1,
      "rating_count": 86
    },
    {
      "id": "5c4f6486-bdf6-4d8b-967c-023bdaca5028",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 5.99,
      "rating_rate": 0.3,
      "rating_count": 123,
      "sale_price": 1.98
    },
    {
      "id": "1f7d7dc2-857a-413b-a0ec-f07c31b516b3",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 24.99,
      "rating_rate": 3.9,
      "rating_count": 5
    },
    {
      "id": "da33f145-7e75-4f11-b6e6-0ca1bd6118ca",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 5.99,
      "rating_rate": 3.9,
      "rating_count": 244
    },
    {
      "id": "013e8130-72e6-498b-91ee-21335b4ff592",
      "title": "TODO, with title case!",
      "description": "TODO",
      "image": "https://img.freepik.com/premium-vector/line-art-octopus-box-flat-logo-vector_612390-330.jpg?w=2000",
      "category": "surf boards",
      "price": 54.99,
      "rating_rate": 1.9,
      "rating_count": 166
    }
  ]

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<any>) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}

const extractDemoProductList = (list: Array<any>, optionalDepartmentId?: string, isSaleData?: any) => {
  // If given a specific depertmentId, filter the output list
  if (optionalDepartmentId) {
    list = list.filter(({ category }) => category === optionalDepartmentId)
  }


  // Optionally populate the product data to have sale prices
  if (isSaleData) {
    list = list.map((product) => ({
      ...product,
      sale_price: (Math.random() * product.price).toFixed(2)
    }))
  }

  return shuffleArray(list.slice(0, 20))
}

const extractDemoProduct = (list: Array<any>, isSaleData: any) => {
  const random = demoProducts[Math.floor(Math.random() * list.length)]
  const product = JSON.parse(JSON.stringify(random));

  // Optionally populate the product data to have sale price
  if (isSaleData) {
    product.sale_price = (Math.random() * product.price).toFixed(2)
  }

  return product
}

const getStarterData = (options: any) => {
  const {
    isListData,
    optionalDepartmentId,
    demoProductId,
    isSaleData,
  } = options

  // If given a single productId, return that data
  if (demoProductId && !isListData) {
    const demoProductIndex = demoProducts.findIndex(({ id }) => id === demoProductId)
    return demoProductIndex !== -1 ? demoProducts[demoProductIndex] : null
  }
  // If rendering a multiple products, return a list of demo products
  if (isListData) {
    return extractDemoProductList(demoProducts, optionalDepartmentId, isSaleData)
  }

  // Default to one random product
  return extractDemoProduct(demoProducts, isSaleData)
}

export default getStarterData