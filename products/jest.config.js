module.exports = {
  setupFilesAfterEnv: ['./tests/suiteSetup.js'],
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
};
