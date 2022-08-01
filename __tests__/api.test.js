/*
  Bare bones Node.js test script

    - Expects API to be running on localhost
    - Will request endpoints to very success

 */
const https = require('http');
const {
  assert,
  assertType,
  describe,
  test,
  request
} = require('./testLibrary')

const config = require('./config.json')
const {
  MICROSERVICES,
  GATEWAY_API_PORT
} = config

describe("Backend Status Checks", () => {
  const statusChecks = MICROSERVICES.map(({ endpointPath, hasDatabaseStatus }) => {
    describe(`${endpointPath} Service Status`, () => {
      test("should respond with valid status", async (successCb) => {
        await request('localhost', GATEWAY_API_PORT, endpointPath, (response) => {
          assertType(response, 'object')
          assert(response.status, 'running')
          if (hasDatabaseStatus) {
            assert(response.databaseConnected, 'success')
          }
        })
        successCb()
      })
    });
  })
});
