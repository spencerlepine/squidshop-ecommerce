module.exports = () => ({
  email: `${(Math.random() + 1).toString(36).substring(7)}@gmail.com`,
  password: (Math.random() + 1).toString(36).substring(7),
  firstName: 'John',
  lastName: 'Deer',
});
