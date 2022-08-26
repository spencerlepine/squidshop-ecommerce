# [SquidShop](https://squidshop.netlify.app/) Ecommerce Monorepo

[![CI](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/node_ci.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/node_ci.yml) [![End-to-end](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/e2e.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/e2e.yml) [![Docker Build](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_ci.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_ci.yml) [![Netlify Deploy](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/frontend_deploy.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/frontend_deploy.yml) [![CodeQL](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/codeql.yml) [![Docker Scan](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_scan.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/docker_scan.yml)

Ocean-themed ecommerce web app connected to microservice architecture backend.

## 🎯 Project Overview

- **React** and **Material UI** frontend deployed to **Netlify**, connected to backend built with **Node.js**
- Decoupled microservice architecture running **Docker** containers for the gateway, **RESTful API** services, and databases
- Authentication with JSON Web Tokens (**JWT**), storing tokens securely in HttpOnly Cookies
- Usage of **MySQL** relational and **Cassandra** NoSQL databases to optimize scaling for each use case
- Continuous Integration with **GitHub Actions**, enforcing **ESLint** code styling, testing with **Jest**, and building Docker images
- Automated scanning for static code and Docker images, tied with **Dependabot** to prevent known security vulnerabilities
- Wrote unit, integration, and end-to-end tests with **Jest** and **Cypress**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

![Frontend Screenshot](./.dev/squidshop-project/assets/frontend_screenshot.png)

![Microservice Architecture Diagram](./.dev/squidshop-project/assets/architecture_diagram.png)

## ⚙️ Setup
Simply clone the repository and run the containers, as long as you have [Docker](https://docs.docker.com/get-docker/) installed.

```
$ git clone https://github.com/spencerlepine/squidshop-ecommerce.git
$ cd squidshop-ecommerce
$ docker-compose up
# visit localhost:3000 in the browser
```