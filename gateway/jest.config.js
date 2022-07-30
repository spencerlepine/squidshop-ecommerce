module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
};
