// jest.config.js
module.exports = {
  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The glob patterns Jest uses to detect test files
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/public/**',
    '!**/coverage/**',
    // '!**/*.config.js',
    '!**/*.{.config.js,.json,.md}',
  ],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx'],

  // The test environment that will be used for testing
  testEnvironment: 'enzyme',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
};
