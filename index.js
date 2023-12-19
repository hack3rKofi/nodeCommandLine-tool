#!/usr/bin/env node
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

//implementation using promises
const { lstat } = fs.promises;

//add additional parameter from process.argv to get files in any dir
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log('Error ', err);
  }

  const statsPromise = filenames.map((filename) =>
    lstat(path.join(targetDir, filename))
  );
  const allstats = await Promise.all(statsPromise);

  for (const stats of allstats) {
    const index = allstats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.redBright.bold(filenames[index]));
    }
  }
});
