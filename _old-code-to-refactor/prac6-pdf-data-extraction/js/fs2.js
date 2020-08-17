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
fs.fromDir = function(startPath, filter) {
  return new Promise(function(resolve, reject) {
    var allFiles = [];
    var allFolderPromises = [];


    if (!fs.existsSync(startPath)) {
      console.log(`no dir ${startPath}`);
      reject(`no dir ${startPath}`);

    }
    let currentFiles = fs.readdirSync(startPath);
    // console.log(currentFiles[0]);
    for (let i = 0; i < currentFiles.length; i++) {
      let filename = path.join(startPath, currentFiles[i]);
      let stat = fs.lstatSync(filename);
      if (stat.isDirectory()) {
        console.log(`found a folder ${currentFiles[i]} , scan it !`);
        let newFolderPromise = fs.fromDir(filename, filter)
          .then(morefiles => {
            allFiles = morefiles.concat(allFiles);
            // console.log(morefiles);
            // allFiles = morefiles;
            // console.log(allFiles);
            // resolve(allFiles);
            return morefiles;
          }); //recurse
        allFolderPromises.push(newFolderPromise);
        console.log(allFolderPromises);

      } else if (filename.endsWith(filter)) {
        // console.log(`found a FILE ${currentFiles[i]}, push it to array!`);
        allFiles.push(filename);

      } else {
        // console.log(`????????????????????????no files found`);
        // resolve([]);
        // resolve(allFiles);
      }

      // } else
      if (i + 1 === currentFiles.length) {
        console.log(`|`);
        console.log(`|- End of current depth loop.`);
        console.log(`|- currentFiles Count : ${currentFiles.length}`);
        console.log(`|- Loop Count : ${i+1}`);
        console.log(`|- allFiles Count : ${allFiles.length}`);
        // console.log(`--------------------------`);
        // console.log(allFiles);


      }
    }
    // console.log(allFiles);
    Promise.all(allFolderPromises).then((values) => {
      resolve(allFiles);
      //   //
    });




  });


};



//fs.fromDir = fromDir;
module.exports = fs;
