# SquidShop Ecommerce Monorepo [![CI](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/ci.yml) [![Netlify Deploy](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/frontend_deploy.yml/badge.svg?branch=main)](https://github.com/spencerlepine/squidshop-ecommerce/actions/workflows/frontend_deploy.yml)

A Full Stack Microservices Ecommerce Application by [@spencerlepine](https://github.com/spencerlepine). Uses continuous integration to lint, test, and build with `GitHub Actions`.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

![Frontend Screenshot](./.github/frontend_screenshot.png)

![Microservice Architecture Diagram](./.github/architecture_diagram.png)

## Setup
```
$ git clone https://github.com/spencerlepine/squidshop-ecommerce.git
$ cd squidshop-ecommerce
$ docker-compose up
# visit localhost:3000 in the browser
```
## Continuous Integration
Automated CI with GitHub Actions to lint, test, and build (docker images) on every pull request. Creates a VM for each microservice.

![GitHub Actions Workflows](./.github/actions_workflow.png)

### Test Coverage Output
Every pull request will have test coverge **comments** for each microservice. Each GitHub Action as uses a job summary output to display this information. Easily visualize the coverage output on every commit, and specify thresholds to meet.

![Test Coverage PR Comments](./.github/test_coverage_pr.png)

![Test Coverage Job Summary](./.github/test_coverage_summary.png)
