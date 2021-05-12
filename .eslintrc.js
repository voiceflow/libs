module.exports = {
  extends: ['@voiceflow/eslint-config', '@voiceflow/eslint-config/typescript', '@voiceflow/eslint-config/utility'],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
      }
    },
    {
      files: ['packages/**/tests/**/*'],
      extends: ['@voiceflow/eslint-config/mocha'],
    },
  ],
};