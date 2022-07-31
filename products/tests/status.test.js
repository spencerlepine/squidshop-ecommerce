// Hit the status endpoint to verify database connection
const request = require('supertest');

const app = require('../index');

describe('/status endpoint', () => {
  test('should respond with valid status', (done) => {
    request(app)
      .get('/status')
      .expect(200)
      .then((response) => {
        const data = response.body;
        expect(data).toBeDefined();
        expect(data).toHaveProperty('status', 'running');
        expect(data).toHaveProperty('databaseConnected', 'success');
        done();
      })
      .catch((err) => done(err));
  });
});
