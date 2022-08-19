const db = require('../src/database/connection');

beforeAll((done) => {
  db.sequelize.sync({ force: true })
    .then(() => done())
    .catch(() => done(err));
});

jest.mock('generateMockUser');
