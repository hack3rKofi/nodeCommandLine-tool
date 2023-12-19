#!/usr/bin/env node
const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log('Error ', err);
  }
  //to make sure the view is always in order
  //create an empty array with the length of all the inputs
  //fill all the array with null values
  //ones the callback function is completed fill the array
  //with the index of where the callback was called
  //check the allstats array to see if there are any null values
  //meaning some other callbacks have not been completed

  const allStats = Array(filenames.length).fill(null);

  for (let filename of filenames) {
    const index = filenames.indexOf(filename);

    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      allStats[index] = stats;

      const ready = allStats.every((stats) => stats);

      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
});
