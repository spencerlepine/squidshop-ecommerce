const app = require('../index.js')
const request = require('supertest')

describe('/hello endpoint', () => {
  test('should respond', (done) => {
    request(app)
      .get('/hello')
      .expect(200)
      .then((response) => {
        expect(response.body).toBeTruthy();
        const { body } = response
        expect(body).toHaveProperty("message");
        expect(typeof body.message).toBe("string")
        expect(body.message).toBe("Hello World!")
        done()
      })
      .catch(err => done(err))
  })
})