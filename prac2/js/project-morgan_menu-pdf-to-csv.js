
/*
 * ********************************************
 * Convert a 2d array into a 2 column array. 
 * For each row, concat all values but the last one to create 2 elements in each array
 */
function convertArrayToCSV(array2d) {
    var twoColArray = [];
    for (var rowNumber in array2d) {
        var row = [];
        var rowLenght = array2d[rowNumber].length;
        var col1 = "";
        var col2 = "";

        if (rowLenght > 2) {
            for (var i = 0; i < (array2d[rowNumber].length - 1); i++) {
                col1 += array2d[rowNumber][i];
//                console.log(col1);
            }
            col2 = array2d[rowNumber][array2d[rowNumber].length - 1];
            row.push(col1);
            row.push(col2);
        } else if (rowLenght === 2) {
            col1 = array2d[rowNumber][0];
            col2 = array2d[rowNumber][1];
            row.push(col1);
            row.push(col2);
        } else {
            col1 = array2d[rowNumber][0];
            row.push(col1);

        }
        twoColArray.push(row);
    }
    var csv_rows = [];
    for (let rowNumber = 0; rowNumber < twoColArray.length; rowNumber++) {
        csv_rows.push(twoColArray[rowNumber].join(";"));

    }
//    csv_rows.push('xx');
//    console.log(csv_rows);
    return csv_rows.join('\n');
}


function pdfjasonTo2dArray(pdfJson) {

    var txt = [];
    var pages = pdfJson.formImage.Pages;
    var rows = [];
    var activeRow = [];

    /*
     * ********************************************
     * Loop Pages
     */
    for (var key in pages) {
        let page = pages[key];
        let page_number = parseInt(key) + 1;
        let page_text = pages[key].Texts.filter((value, index, array) => {
            return value.x !== undefined;
        });
        txt.push(`-- Page ${page_number} ${page}`);
//        txt.push(JSON.stringify(pages[0].Texts));
//        txt.push(`page_text = ${JSON.stringify(page_text)}`);
        /*
         * ********************************************
         * Loop pdfElements in a pages
         */

        for (let key in page_text) {
            var pdfElement = page_text[key];
            var prevPdfElement;
            var elementText = pdfElement.R[0].T;
            var elementTextCleaned;

            if (pdfElement.x !== undefined) {

                elementTextCleaned = decodeURIComponent(elementText);
                elementTextCleaned = elementTextCleaned.toString().replace(/\t/g, '  ');
                elementTextCleaned = elementTextCleaned.toString().replace(/\ {2,}/g, ' ');
                if (inSameRow(pdfElement, prevPdfElement, true)) {
                    activeRow.push(elementTextCleaned);
                } else {
                    rows.push(activeRow);
                    activeRow = [];
                    activeRow.push(elementTextCleaned);
                }

                prevPdfElement = pdfElement;

            }
        }
    }

//    console.log(txt.join('\n'));
//    console.log(rows.join('\n'));
    return rows;
}