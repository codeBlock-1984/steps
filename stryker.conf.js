const jestConfig = require('./jest.config');
/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: [
    'source/*.js',
    '!source/**/*.test.js'
  ],
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off",
  jest: {
    configFile: "jest.config.js",
  },
};
