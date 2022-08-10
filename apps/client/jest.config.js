module.exports = {
  collectCoverageFrom: ['src/components/**/*.js', '!**/node_modules/**', '!<rootDir>/src/index.js'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
  projects: [
    {
      displayName: "DOM",
      testEnvironment: "jsdom",
      transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
      },
      setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.js"],
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
        "\\.(css|less)$": "<rootDir>/__tests__/__mocks__/styleMock.js",
        "\\.(png|gif|ttf|eot|svg|jpeg|jpg)$": "<rootDir>/__tests__/__mocks__/fileMock.js",
      },
      transformIgnorePatterns: ["node_modules/(?!.*?/es/.*\\.js)"],
    },
  ],
};
