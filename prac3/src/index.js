/*  HTTP, Requests, Routers */
const http = require('http');
const url = require('url');
/* OS,  FS & File management */
const path = require('path');
const fs = require('fs');

const util = require('util');
//const exec = util.promisify(require('child_process'));
const exec = require('child_process');
const express = require('express');
const app = express();

/*  PDF Reader */
//const pdfreader = require('pdfreader');
//const PDFParser = require("pdf2json");


/*  Server */
//const svr = require("./js/server.js");
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.write(handleQuery(req));

  res.end();
  console.log('server.test');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  if (process.send) {
    process.send('online');
  }
});

function handleQuery(req) {
  let txt = [];
  let q = url.parse(req.url, true).query;
  txt.push(`- req.url = ${req.url}`);
  txt.push(`\n`);
  txt.push(`- url.parse(req.url, true).query; = `);
  txt.push(`\n`);
  txt.push(JSON.stringify(q));

  return txt.join("\n");
}
