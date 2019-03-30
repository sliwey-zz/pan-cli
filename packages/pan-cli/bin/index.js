#!/usr/bin/env node

const program = require('commander');
const packageJson = require('../package.json');

program
  .version(packageJson.version);

program
  .command('create')
  .arguments('<project-directory>')
  .description('创建一个新的项目（「.」表示在当前目录创建）')
  .action((projectName) => {
    console.log(projectName)
  });

program
  .arguments('<command>')
  .action((cmd) => {
    log();
    log(`  ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`);
    log(`  Please run ${chalk.cyan('ytian -h')} for more information of usage.`);
    log();
  });

program.parse(process.argv);