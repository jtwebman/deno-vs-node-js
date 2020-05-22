'use strict';

const https = require('https');
const { TextDecoder } = require('util');
const decoder = new TextDecoder('utf8');

https
  .get(process.argv[2], (res) => {
    const bufs = [];
    res.on('data', (d) => {
      bufs.push(d);
    });
    res.on('end', () => {
      console.log(decoder.decode(Buffer.concat(bufs)));
    });
  })
  .on('error', (e) => {
    console.error(e);
  });
