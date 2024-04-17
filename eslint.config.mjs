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
];
