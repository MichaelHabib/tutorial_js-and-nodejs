/*  HTTP, Requests, Routers */
const http = require('http');
const https = require('https');
const url = require('url');



/*  Server */
//const svr = require("./js/server.js");
// const hostname = 'localhost';
const hostname = '192.168.8.203';
const port = 48802;
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