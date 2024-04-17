import baseConfig from '@voiceflow/eslint-config';
// import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        // ...globals.node,
      },
    },
  },
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
