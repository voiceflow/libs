module.exports = {
  'packages/**/package.json': ['fixpack'],
  'packages/**/lib/**/**.{js,ts}': ['eslint --fix'],
  'packages/**/src/**/**.{js,ts}': ['eslint --fix'],
};
