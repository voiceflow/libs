const config = require('@voiceflow-meta/jest-config');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...config,
  testEnvironment: 'jsdom',
  setupFiles: ['./config/test/setup.ts'],
};
