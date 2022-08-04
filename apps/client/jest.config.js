module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!**/node_modules/**', '!<rootDir>/src/index.js'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
  projects: [
    {
      displayName: "DOM",
      testEnvironment: "jsdom",
      transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
      },
      setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
      // "extensionsToTreatAsEsm": [".jsx"],
      testMatch: ["<rootDir>/**/*.test.js"],
      setupFiles: ["dotenv/config"],
      modulePaths: ["/src/"],
      moduleDirectories: ["node_modules", "src"],
      watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
      ],
      moduleFileExtensions: ["js"],
      moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
        "\\.(png|gif|ttf|eot|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
      },
      transformIgnorePatterns: ["node_modules/(?!.*?/es/.*\\.js)"],
    },
  ],
};
