module.exports = {
  'package.json': ['fixpack'],
  '**/package.json': ['fixpack'],
  '**/*.{js,ts}': ['eslint --fix'],
};
