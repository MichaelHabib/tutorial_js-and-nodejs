const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('/home/user/Downloads/' +
  '_TaxPapaerwork_withNodeJs-2014-2018/data_file_one-file/CompleteFreedom-419919999-12Jan2015.pdf');

pdf(dataBuffer).then(function(data) {

  // number of pages
  console.log(data.numpages);
  // number of rendered pages
  console.log(data.numrender);
  // PDF info
  console.log(data.info);
  // PDF metadata
  console.log(data.metadata);
  // PDF.js version
  // check https://mozilla.github.io/pdf.js/getting_started/
  console.log(data.version);
  // PDF text
  // console.log(data.text);

});
