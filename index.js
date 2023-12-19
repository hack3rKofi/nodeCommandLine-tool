#!/usr/bin/env node
const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log('Error ', err);
  } else {
    console.log(filenames);
  }
});
