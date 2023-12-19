#!/usr/bin/env node
const fs = require('fs');

//implementation using promises
const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log('Error ', err);
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename);
      console.log(filename, stats.isFile());
    } catch (error) {
      console.log(error);
    }
  }
});
