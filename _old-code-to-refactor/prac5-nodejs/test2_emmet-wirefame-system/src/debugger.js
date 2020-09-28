// const debug = require('debug')('http'), http = require('http');
// var debug = require('debug');


/*USAGE
const {d,dd} = require("../js/debugger");
* */
let d = (message, ...args) => {
    console.log(message, (args.length > 0) ? args : '')
}
let dd = (message, ...args) => {
    console.log('== START debug message')
    console.log(message, (args.length > 0) ? args : '')
    console.log('== END debug message')
}

module.exports = {
    d: d,
    dd: dd
};