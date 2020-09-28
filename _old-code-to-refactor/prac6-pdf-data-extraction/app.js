/*  HTTP, Requests, Routers */
const http = require('http');
const url = require('url');
/* OS,  FS & File management */
const path = require('path');
//const fs = require('fs');
const fs = require('./js/fs2');
const exec_tree = require("./js/exec_tree.js")
const tree1 = exec_tree.tree1;
const tree2 = exec_tree.tree2;
const util = require('util');
//const exec = util.promisify(require('child_process'));
const exec = require('child_process');
const express = require('express');
const app = express();

/*  PDF Reader */
//const pdfreader = require('pdfreader');
//const PDFParser = require("pdf2json");
//const pdf_reader = require("./js/pdf_reader.js")
const readpdfs = require("./js/pdfReader_stGeorgeBankStatements.js").readpdfs;


/*  Server */
//const svr = require("./js/server.js");
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //    res.write('Hello World');
  res.write(handleQuery(req));
  //    res.write(main().toString());
  res.end();
  console.log('server.test');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  if (process.send) {
    process.send('online');
  }
});


function func1() {
  return "this is func1!";

  function func2() {}
  let st;
  st += "this is func2!";
  st += "\n";
  st += `date = ${Date()}`;
  return st;
}

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
// console.log(`=== TESTING ONE FILE ONLY!`);
// readpdfs('/home/user/Downloads/_TaxPapaerwork_withNodeJs-2014-2018/data_file_one-file/');
readpdfs('/home/user/Downloads/_TaxPapaerwork_withNodeJs-2014-2018/data_files/', );
