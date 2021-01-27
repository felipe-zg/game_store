const { name } = require('./package.json');

module.exports = {
  displayName: name,
  name,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverageFrom: ['src/**/*.ts(x)'],

  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
