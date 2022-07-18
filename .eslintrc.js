const monorepoOverrides = require('@voiceflow/eslint-config/overrides/monorepo');

module.exports = {
  extends: ['@voiceflow/eslint-config'],
  rules: {
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['@voiceflow/eslint-config/utility'],
    },
    {
      files: ['packages/*/tests/**/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    ...monorepoOverrides(__dirname),
  ],
};
