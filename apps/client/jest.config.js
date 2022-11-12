module.exports = {
  collectCoverageFrom: ['src/components/**/*.js', '!**/node_modules/**', '!<rootDir>/src/index.js'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.js'],
  projects: [
    {
      displayName: "DOM",
      testEnvironment: "jsdom",
      preset: 'ts-jest',
      transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
      },
      setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.js"],
      // "extensionsToTreatAsEsm": [".jsx"],
      testMatch: ["<rootDir>/**/*.test.js"],
      setupFiles: ["dotenv/config"],
      modulePaths: ["<rootDir>/src"],
      moduleDirectories: ["node_modules", "<rootDir>/src"],
      watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
      ],
      moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
      moduleNameMapper: {
        "\\.(css|less)$": "<rootDir>/src/__tests__/__mocks__/styleMock.ts",
        "\\.(png|gif|ttf|eot|svg|jpeg|jpg)$": "<rootDir>/src/__tests__/__mocks__/fileMock.ts",
      },
      transformIgnorePatterns: ['/node_modules/(?!axios)'],
    },
  ],
};
