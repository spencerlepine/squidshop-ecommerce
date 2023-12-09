# SquidShop Ecommerce Monorepo

Ocean-themed ecommerce application built with React/MaterialUI, microservice architecture TypeScript Node.js backend, Cassandra NoSQL database, and MySQL database. Includes CI/CD pipeline using GitHub Actions to run end-to-end Cypress tests and deploy Netlify frontend. Connects to the Amazon EC2 backend (running Docker containers).

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) 

![Frontend Screenshot](./.dev/squidshop-project/assets/frontend_screenshot.png)

## 🎥 Demo Video + Project Walk-through

[![Youtube Video](./.dev/squidshop-project/assets/squidshop-youtube.png)](https://www.youtube.com/watch?v=VfxcdeF16uE)

## 🎯 Project Overview

- Designed modern and responsive frontend with **React**, **Material UI** and **TypeScript**
- Wrote unit, integration, and end-to-end tests with **Jest** and **Cypress**
- Developed decoupled microservice architecture backend with **RESTful API** services and gateway API, running **Docker** containers
- Secured client and server authentication with JSON Web Tokens (**JWT**), storing tokens securely in browser HttpOnly cookies
- Managed the **MySQL** relational and **Cassandra** NoSQL databases to optimize scaling for each use case
- Automated continuous integration with **GitHub Actions**, enforcing **ESLint** code styling, testing, and building Docker images
- Automated scanning for static code and Docker images, tied with **Dependabot** to prevent known security vulnerabilities

## 📦 Technologies:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/) / [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)
- [MySQL](https://www.mysql.com/)
- [Cassandra](https://cassandra.apache.org/_/index.html)

## 🏗️ Architecture

![Microservice Architecture Diagram](./.dev/squidshop-project/assets/architecture_diagram-smaller.png)

## 🌟 Features

### Browse Product Catalog
View the catalog on the landing page. Find on-sale items, search by department, and search all products with sorting options to filter by price, name, or rating.

![Catalog Screenshot](./.dev/squidshop-project/assets/catalog-feature.png)

![Product Screenshot](./.dev/squidshop-project/assets/product-feature.png)

### Create an Account
Sign in or create an account with email/password, authenticating with JWT Tokens and HTTPOnly cookies.

![Auth Screenshot](./.dev/squidshop-project/assets/auth-feature.png)

![Account Screenshot](./.dev/squidshop-project/assets/account-feature.png)


### Add to Cart and Place Orders
Store items in cart (persisted on the backend) and track order history for your profile.

![Cart Screenshot](./.dev/squidshop-project/assets/cart-feature.png)

![Order Screenshot](./.dev/squidshop-project/assets/order.png)

## ⚙️ Local Development

Clone the repository and run the containers (must have [Docker](https://docs.docker.com/get-docker/) installed)

```
$ git clone https://github.com/spencerlepine/squidshop-ecommerce.git
$ cd squidshop-ecommerce
$ docker-compose up
# visit localhost:3000 in the browser
```

## 🌐 Links

- Demo website: (DEPRACATED) [https://squidshop.netlify.app/](https://squidshop.netlify.app/)
- Demo video: [Youtube video](https://www.youtube.com/watch?v=VfxcdeF16uE)
- Blog post: [https://www.spencerlepine.com/portfolio/squidshop-ecommerce](https://www.spencerlepine.com/portfolio/squidshop-ecommerce)

