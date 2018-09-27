/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const _ = require('underscore');
const path = require('path');
//const fs = require('fs');
const fs = require('./fs2');
const util = require('util')
const exec = require('child_process');
const pdfreader = require('pdfreader');
const PDFParser = require("pdf2json");



function pdfToJson(filePath) {
  return new Promise(function(resolve, reject) {
    let pdfParser = new PDFParser(this, 1);
    pdfParser.loadPDF(filePath);
    pdfParser.on("pdfParser_dataError", (errData) => {
      console.error(errData.parserError);
      //            reject(errData);
    });
    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      //            console.log(pdfData);
      resolve(pdfData);
      //            resolve(JSON.parse(pdfData));
    });

  });
}

function pdfTextFromJson(pdfJson) {
  return new Promise(function(resolve, reject) {
    var errors = [];
    var pages;
    if (pdfJson.formImage) {
      pages = pdfJson.formImage.Pages;
    } else {
      errors.push(`pdfjson.formImage does not exist!`);
    }
    var itemsPaganized = [];

    if (errors.length > 0) {
      reject(errors.join('\n'));
    }

    let filterFunc = (value) => {
      return typeof value.R[0].T !== 'undefined';

    };

    /*
     * ********************************************
     * Loop Pages
     */
    for (var key in pages) {
      let page = pages[key];
      let page_number = parseInt(key) + 1;
      let pageItems = pages[key].Texts
        .filter(filterFunc)
        .map((value) => {
          return {
            x: value.x,
            y: value.y,
            w: value.w,
            t: decodeURIComponent(value.R[0].T),
            p: page_number
          };
        });
      itemsPaganized.push(pageItems);

    }
    resolve(new Array().concat(...itemsPaganized));

  });
}

function writeJSONFile(data, filePath) {
  let fileExtension = '.json';
  if (!filePath.endsWith(fileExtension)) {
    filePath = filePath + fileExtension;
  }
  return writeFile(JSON.stringify(data), filePath);

}


function inSameRow(newItem, prevItem, ifNoPrevItem = true) {
  if (prevItem === undefined) {
    return ifNoPrevItem;
  }
  if (newItem.y === prevItem.y) {
    return true;
  } else {
    return false;
  }
}


/**
 * ********************************************
 * @param {array} rows 2d array in the format of rows[rowNumber][columnNumber]
 * @param {string} outputFIle
 * @param {object} options
 */
function writeCSVFile(rows, outputFIle, options) {

  let default_options = {
    delimiter: ",",
    fileExtension: '.csv'
  };


  var csv_rows = [];
  var data;

  try {
    options = options.assign(default_options, options);
  } catch (e) {
    let err = [];
    err.push(e);
    err.push(`- Failed to use merge provided options, now using default options.`);
    err.push(`- Make sure options is an object.`);
    console.log(err.join('\n'));
    options = default_options;

  }
  for (let rowNumber = 0; rowNumber < rows.lenght; rowNumber++) {
    csv_rows.push(rows[rowNumber].join(options.delimiter));
  }
  data = csv_rows.join('\n');
  writeFile(data, outputFIle, options.fileExtension);

}

/*
 * ********************************************
 * Comment
 */

function writeFile(data, filePath) {
  return new Promise(function(resolve, reject) {

    return fs.writeFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        return resolve(data);
      }

    });
  });
}



var process = (filename) => {

  /*
   * ********************************************
   * Desired Function Structure:
   * - pdfToJson
   * -
   */


};
module.exports = {
  'process': process,
  'pdfToJson': pdfToJson,
  'writeFile': writeFile,
  'writeJSONFile': writeJSONFile,
  'pdfTextFromJson': pdfTextFromJson,
  'writeCSVFile': writeCSVFile
};
