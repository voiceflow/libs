const monorepoOverrides = require('@voiceflow/eslint-config/overrides/monorepo');

module.exports = {
  extends: ['@voiceflow/eslint-config'],
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['@voiceflow/eslint-config/utility'],
    },
    ...monorepoOverrides(__dirname),
  ],
};
