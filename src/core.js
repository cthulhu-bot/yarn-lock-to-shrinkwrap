import program from 'commander'
import prompt from 'prompt'
const readline = require('readline')
import fs from 'fs'
import path from 'path'
import YarnLock from './yarnlock'

program
  .option('-f, --fileName', 'Specify yarn.lock fileName')
  .parse(process.argv);

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

const processYarnLock = () => {
  if (!program.fileName) {
    console.log('\x1b[31m%s\x1b[0m', '\nMissing yarn.lock fileName\n');
    console.log('Please enter the path to your yarn.lock file now');
    rl.question(
      '  (hit <Enter> to default to the local yarn.lock): ',
      filePath => {
        console.log(filePath);
        rl.close();
      },
    );
    process.exitCode = 1;
  } else {
    process.argv.forEach((val, index) => {
      console.log(`${index}: ${val}`);
    });
    const rootProjectPath = process.cwd();
    fs.readdir(rootProjectPath, (err, files) => {
      if (files.indexOf('yarn.lock') > -1) {
        const yarnLock = fs.readFile(
          `${rootProjectPath}//yarn.lock`,
          'utf8',
          (err, data) => {
              const yarnLock = new YarnLock(data)
              console.log(yarnLock.packages())
          }
        );
      } else {
        console.log('no fucking yarn.lock!');
      }
    });
  }
};

processYarnLock();
