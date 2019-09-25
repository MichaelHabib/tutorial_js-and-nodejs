/*  HTTP, Requests, Routers */
const http = require('http');
const https = require('https');
const url = require('url');
const util = require('util')
const os = require('os');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const reload = require('express-reload');

// const hostname = 'localhost';
const hostname = '192.168.8.203';
const port = 48805;

let folder_path = __dirname;


// app.use(reload(folder_path));
//
// app.get('/', (req, res) => res.send('Hello World! updated !'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*

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
}*/
