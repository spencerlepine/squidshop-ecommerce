const request = require('supertest');
const app = require('../../index');

const registerUser = (user) => (new Promise((resolve) => (
  request(app)
    .post('/register')
    .send(user)
    .expect(302)
    .then((response) => resolve(response))
)));

const loginUser = (user) => (new Promise((resolve) => (
  request(app)
    .post('/login')
    .send(user)
    .expect(201)
    .then((response) => resolve(response))
)));

module.exports = {
  registerUser,
  loginUser,
};
