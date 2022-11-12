# [SquidShop](https://squidshop.netlify.app/) Ecommerce Monorepo

[![CI](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/node_ci.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/node_ci.yml) [![End-to-end](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/e2e.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/e2e.yml) [![Docker Build](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_ci.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_ci.yml) [![Netlify Deploy](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/frontend_deploy.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/frontend_deploy.yml) [![CodeQL](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/codeql.yml) [![Docker Scan](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_scan.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_scan.yml)

Ocean-themed ecommerce web app connected to microservice architecture backend.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) 

![Frontend Screenshot](./.dev/squidshop-project/assets/frontend_screenshot.png)

## 🎥 Demo Video + Project Walk-through

[![Youtube Video](./.dev/squidshop-project/assets/squidshop-youtube.png)](TODO)

## 🎯 Project Overview

- Designed modern and responsive frontend with **React**, **Material UI** and **TypeScript**
- Wrote unit, integration, and end-to-end tests with **Jest** and **Cypress**
- Developed decoupled microservice architecture backend with **RESTful API** services and gateway API, running **Docker** containers
- Secured client and server authentication with JSON Web Tokens (**JWT**), storing tokens securely in browser HttpOnly cookies
- Managed the **MySQL** relational and **Cassandra** NoSQL databases to optimize scaling for each use case
- Automated continuous integration with **GitHub Actions**, enforcing **ESLint** code styling, testing, and building Docker images
- Automated scanning for static code and Docker images, tied with **Dependabot** to prevent known security vulnerabilities


## 🌐 Links

- Demo website: [https://squidshop.netlify.app/](https://squidshop.netlify.app/)
- Youtube demo video: [TODO](TODO)
- Video slideshow: [Google Slides](https://docs.google.com/presentation/d/1Sms6UfmCuadFw1SUD1WRonk7vxQzgPKXFXU61_wVC60/edit?usp=sharing)
- Source code: [github.com/spencerlepine/squidshop-ecommerce](https://github.com/spencerlepine/squidshop-ecommerce)
- Blog post: [https://www.spencerlepine.com/portfolio/squidshop-ecommerce](https://www.spencerlepine.com/portfolio/squidshop-ecommerce)

## 🏗️ Architecture

![Microservice Architecture Diagram](./.dev/squidshop-project/assets/architecture_diagram-smaller.png)


## ⚙️ Setup
Simply clone the repository and run the containers, as long as you have [Docker](https://docs.docker.com/get-docker/) installed.

```
$ git clone https://github.com/spencerlepine/squidshop-ecommerce.git
$ cd squidshop-ecommerce
$ docker-compose up
# visit localhost:3000 in the browser
```

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
