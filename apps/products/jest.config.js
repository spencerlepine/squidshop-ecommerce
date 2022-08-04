module.exports = {
  setupFilesAfterEnv: ['./tests/suiteSetup.js'],
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!src/models/*.js'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
};
