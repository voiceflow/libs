module.exports = {
  extends: '../.eslintrc.js',
  rules: {
    'no-continue': 'off',
    quotes: ['error', 'single', 'avoid-escape'],
    'sonarjs/cognitive-complexity': 'warn',
    'promise/always-return': 'off',
    'require-jsdoc': 'off',
    'no-unused-expressions': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'eslint-comments/disable-enable-pair': 'off',
  },
};
