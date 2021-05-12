module.exports = {
  '**/package.json': ['fixpack --quiet'],
  '**/*.{js,ts}': ['eslint --fix'],
};
