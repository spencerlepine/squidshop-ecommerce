module.exports = {
  setupFilesAfterEnv: ['./__tests__/suiteSetup.js'],
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!src/database/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
};
