/* OS,  FS & File management */
const path = require('path');
//const fs = require('fs');
const fs = require('./fs2');
const util = require('util');
//const exec = util.promisify(require('child_process'));
const exec = require('child_process');

/*  PDF Reader */
//const pdfreader = require('pdfreader');
//const PDFParser = require("pdf2json");
//const pdf_reader = require("./js/pdf_reader.js")
const pdf_reader = require("./pdf_reader.js")
/* Utility */
const _ = require('underscore');
const logger = require('pino')();


const handleErr = (err) => {
  console.log(err);
  throw new Error(`Higher-level error ${err.message} ${err.stack}`);

};

const procesPDF = (filePath, outputFolder) => {

  var fileName = path.basename(filePath, '.pdf');
  var fileExtension = path.extname(filePath);
  var fileDirname = path.dirname(filePath);
  // console.log(fileDirname);
  var fileData = {};
  if (!outputFolder) {
    outputFolder = fileDirname;
  }
  const func_outputFilePath = (outputFolder, fileName, fileExtension) => {
    return `${outputFolder}${fileName}${fileExtension}`;
  };


  let promise = new Promise((resolve, reject) => {
    resolve();
  });
  Promise.resolve()
    .then(() => {
      // Read PDF File
      let pdfJson = pdf_reader.pdfToJson(filePath);
      return pdfJson;
    })
    .then((pdfJson) => {
      // Map pdf JSON to fileData Object
      // console.log(pdfJson);
      return fileData.pdfJson = pdfJson;;
    })
    // .then(() => {
    //   // Write full pdf JSON data to file
    //   let pdfJson = fileData.pdfJson;
    //   let pdfJsonFile = pdf_reader.writeJSONFile(
    //     pdfJson,
    //     func_outputFilePath(outputFolder, fileName + '-full', fileExtension)
    //   );
    //   return pdfJsonFile;
    // })
    // .then((pdfJsonFile) => {
    //   // Map pdfTextsJsonFile to fileData object
    //   return fileData.pdfJsonFile = pdfJsonFile;
    // })

    .then(() => {
      //Extract only text from pdf JSON by returning objects  with 't' property.
      let pdfJson = fileData.pdfJson;
      let pdfTextsJson = pdf_reader.pdfTextFromJson(pdfJson);
      return pdfTextsJson;
    })
    .then((pdfTextsJson) => {
      // Map pdfTextsJson to fileData object
      // console.log(pdfTextsJson);
      return fileData.pdfTextsJson = pdfTextsJson;
    })
    // .then((pdfTextsJson) => {
    //   // Write pdfTextsJson to file
    //   // console.log(pdfTextsJson);
    //   let pdfTextsJsonFile = pdf_reader.writeJSONFile(
    //     pdfTextsJson,
    //     func_outputFilePath(outputFolder, fileName + '-items', fileExtension)
    //   );
    //   return pdfTextsJsonFile;
    // })
    // .then((pdfTextsJsonFile) => {
    //   // Map pdfTextsJsonFile to fileData object
    //   return fileData.pdfTextsJsonFile = pdfTextsJsonFile;
    // })

    .then(() => {
      // Group pdfTextsJson by row
      // console.log(pdfTextsJsonFile);
      let pdfTextFromJson_Grouped = _.groupBy(fileData.pdfTextsJson, (item) => `${item.p}_y${item.y}`);
      return pdfTextFromJson_Grouped;
    })
    .then((pdfTextFromJson_Grouped) => {
      //COnverting pdfTextFromJson_Grouped to txt format then saving to file
      var pdfTextString = [];
      for (rowKey of Object.keys(pdfTextFromJson_Grouped)) {
        let rowObj = pdfTextFromJson_Grouped[rowKey];
        // console.log(rowObj);
        let rowCells = [];
        for (cellObj of rowObj) {
          rowCells.push(cellObj.t);
          // console.log(cellObj.t);
        }
        pdfTextString.push(rowCells.join(' '));
      }
      pdfTextString = pdfTextString.join('\n')
      // console.log(pdfTextString);
      pdf_reader.writeFile(
        pdfTextString,
        func_outputFilePath(outputFolder, fileName + '-', 'txt'));

      return pdfTextFromJson_Grouped;
    })
    .catch(err => {
      //                console.log(err);
      throw new Error(`- error ${err.message} ${err.stack}`);

    });
};

readpdfs = (pdfsSource, outputFolder) => {
  if (!outputFolder) {
    outputFolder = pdfsSource + "output/";
  }
  // console.log(outputFolder);
  return fs.fromDir(pdfsSource, ".pdf")
    .then((fileList) => {
      var promises = [];
      console.log(`= fileList =`);
      console.log(fileList);

      for (var pdfSource of fileList) {
        promises.push(procesPDF(pdfSource, outputFolder));
      }
      return promises;
    });
};

module.exports.readpdfs = readpdfs;
