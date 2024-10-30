import baseConfig from '@voiceflow/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...baseConfig,
  {
    ignores: ['**/coverage/**'],
  },
  {
    rules: {
      'sonarjs/prefer-immediate-return': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    rules: {
      'no-dupe-class-members': 'off',
      'sonarjs/prefer-immediate-return': 'off',
    },
  },
  {
    files: ['**/example/index.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'sonarjs/prefer-immediate-return': 'off',
    },
  },
];
