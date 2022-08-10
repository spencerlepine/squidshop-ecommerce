const db = require('../src/database');

beforeAll((done) => {
  db.sequelize.sync({ force: true })
    .then(() => done())
    .catch(() => done(err));
});

jest.mock('generateMockUser');
