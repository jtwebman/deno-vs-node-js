'use strict';

const fs = require('fs');

process.argv.slice(2).forEach(async (filename) => {
  await new Promise((resolve, reject) => {
    const file = fs.createReadStream(filename);
    file.on('error', (err) => {
      reject(err);
    });
    file.on('finish', () => {
      resolve();
    });
    file.pipe(process.stdout);
  });
});
