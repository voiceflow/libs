const fs = require('fs');
const path = require('path');

const packagesDir = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir);

module.exports = {
  extends: ['@voiceflow/eslint-config'],
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: ['@voiceflow/eslint-config/utility'],
    },
    {
      files: ['*.ts'],
      rules: {
        'no-shadow': 'off',
      },
    },
    ...packages.map((pkg) => ({
      files: [`packages/${pkg}/**/*`],
      extends: ['@voiceflow/eslint-config/typescript'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.join(packagesDir, pkg, 'tsconfig.json'),
          },
        },
      },
    })),
  ],
};
