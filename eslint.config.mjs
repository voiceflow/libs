import baseConfig from '@voiceflow/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...baseConfig,
  {
    files: ['**/*.ts'],
    rules: {
      'no-dupe-class-members': 'off',
    },
  },
  {
    files: ['**/example/index.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
