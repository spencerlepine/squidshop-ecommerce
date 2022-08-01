# Integration Test Scripts

These are scripts for continuous integration to build docker images and test the API with real HTTP requests on `localhost`.

## Development Usage
```sh
cd __tests__
docker-compose -p ci -f ../docker-compose.yml up -d
node integration.test.js
# docker-compose -p ci -f ../docker-compose.yml down
```

## GitHub Actions
These scripts are used in GitHub Actions to run and test the live API.

> Note: instead of having ONE script for everything, I seperated every step to easily identify points of failure

1. Runs `chmod +x ./script.test.sh` to make file executable
2. Runs `docker-compose.test.sh` to verify the containers can build and run
3. Runs `docker-compose -p ci -f ../docker-compose.yml up -d` to start the containers
5. Runs `integration.test.sh` test the live API

## Configuration
Simple configuration, just update [`config.json`](./config.json).

- `GATEWAY_API_PORT`: PORT on localhost specified in `docker-compose.yml`
- `MICROSERVICES`: gateway forwards requests to different endpoints, reponse objects are different if they are using databases

### Example Configuration File
```json
{
  "GATEWAY_API_PORT": 5000,
  "MICROSERVICES": [
    {
      "endpointPath": "/status"
    },
    {
      "endpointPath": "/users/status",
      "hasDatabaseStatus": true
    },
    {
      "endpointPath": "/products/status",
      "hasDatabaseStatus": true
    }
  ]
}
```

## Docker Compose Valid Build Test
```sh
chmod +x ./docker-compose.test.sh
./docker_compose.test.sh
```

## API Status Check Node.js Test
```sh
chmod +x ./integration.test.sh
./integration.test.sh
```