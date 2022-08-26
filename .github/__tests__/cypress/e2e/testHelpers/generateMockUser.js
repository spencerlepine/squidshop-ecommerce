const randomStrings = ['', '', '', '', ''].map(() => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');

module.exports = () => ({
  id: (Math.random() * 10000).toFixed(2).toString(),
  firstName: 'John',
  lastName: 'Doe',
  email: `john${randomStrings}@gmail.com`,
  password: 'T0ttallY#ArdPa55$'
})