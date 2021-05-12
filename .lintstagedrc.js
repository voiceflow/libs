module.exports = {
  'packages/**/package.json': ['fixpack'],
  'packages/**/lib/**/**.{js,ts}': ['eslint --fix', 'prettier --write'],
  'packages/**/src/**/**.{js,ts}': ['eslint --fix', 'prettier --write'],
};
