module.exports = {
  'packages/**/package.json': ['fixpack'],
  '**/*.{js,ts}': ['eslint --fix'],
};
