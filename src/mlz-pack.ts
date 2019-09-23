import program from 'commander';
import Init from './index';
import figlet from 'figlet';
// import chalk from 'chalk';
import Printer from '@darkobits/lolcatjs';
const pkg = require('../package.json');

function printBanner () {
  figlet.text('mlz pack', {
    font: '3D-ASCII',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  }, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(Printer.fromString(data));
    console.log(Printer.fromString(` mlz-pack 当前版本 ${pkg.version}`));
    console.log(Printer.fromString(' Run mlz-pack to see usage.'));
  });
}
program
  .option('dev', '开发环境配置')
  .option('prod', '生产环境配置');

program.parse(process.argv);
if (program.dev) {
  console.log('devxxx', program.dev);
  Init.run('dev');
} else if (program.prod) {
  console.log('prodxxx', program.prod);
  Init.run('prod');
} else {
  printBanner();
}