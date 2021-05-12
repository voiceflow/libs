module.exports = {
  'packages/**/package.json': ['fixpack'],
  'packages/**/lib/**/**.{js,ts}': ['prettier --write'],
  'packages/**/src/**/**.{js,ts}': ['prettier --write'],
};
