/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//const fs = require('fs');
const fs = require('fs-extra');
const path = require('path');

/**
 * ********************************************
 * fromDir()
 * Source: https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs
 */
fs.fromDir = function (startPath, filter) {
    return new Promise(function (resolve, reject) {
        var filesss = [];
        var files;
        if (!fs.existsSync(startPath)) {
            console.log(`no dir ${startPath}`);
            reject(`no dir ${startPath}`);

        }
        files = fs.readdirSync(startPath);

        for (var i = 0; i < files.length; i++) {
            var filename = path.join(startPath, files[i]);
            var stat = fs.lstatSync(filename);
//            console.log(stat);
            if (stat.isDirectory()) {
//                var morefiles = fs.fromDir(filename, filter); //recurse
                fs.fromDir(filename, filter).then(morefiles => {
//                    console.log('filesss = !');
//                    console.log(filesss);
                    filesss = filesss.concat(morefiles);
                    resolve(filesss);
//                    console.log('the folder is !');
//                    console.log(morefiles);
                }); //recurse
            } else if (filename.endsWith(filter)) {
                filesss.push(filename);
                resolve(filesss);
            }

            if (i === files.length) {
//                console.log(filesss.length);
                resolve(filesss);

            }
        }


    });


//    var filesss = [];
//    var promise = new Promise(function (resolve, reject) {
//
//        if (!fs.existsSync(startPath)) {
//            console.log(`no dir ${startPath}`);
//            reject(`no dir ${startPath}`);
//
//        }
//
//        var files = fs.readdirSync(startPath);
////    console.log(files);
//
//        for (var i = 0; i < files.length; i++) {
//            var filename = path.join(startPath, files[i]);
//            var stat = fs.lstatSync(filename);
//            if (stat.isDirectory()) {
//                var morefiles = fs.fromDir(filename, filter); //recurse
//                filesss = filesss.concat(morefiles);
////            } else if (filename.indexOf(filter) >= 0) {
//            } else if (filename.endsWith(filter)) {
//                filesss.push(filename);
//
//            }
//        }
//        resolve(filesss);
//    });
//    return promise;

};



//fs.fromDir = fromDir;
module.exports = fs;