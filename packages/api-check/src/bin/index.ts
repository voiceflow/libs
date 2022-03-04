import { Command } from 'commander';

import runAction from './action';

const program = new Command();

const setOptions = (program: Command) =>
  program
    .option('-c, --config <path>', 'Path to config file', './api-check.json')
    .option('-p, --project <path>', 'Path to project directory containing a package.json and tsconfig.json');

setOptions(program.command('check'))
  .description('Run api-extractor against existing interface')
  .action(({ config, project }) => runAction({ build: false, config, project }));

setOptions(program.command('build'))
  .description('Create api-extractor interface')
  .action(({ config, project }) => runAction({ build: true, config, project }));

program.parse();
