const util = require('util')
const exec = require('child_process');
//const exec = util.promisify(require('child_process'));

function tree1(startingPath, options = "-L 10 -J -f") {

    let st = exec.execSync(`tree ${options} ${startingPath}`).toString();
    let json = JSON.parse(st);
    console.log(json[0]);
    console.log(json);
    console.log(typeof (json));
    return json;
}

function tree2(startingPath, options = "-L 10 -J ") {
    var files;
    let ex = exec.execSync(`tree ${options} ${startingPath}`, function (err, stdout, stderr) {
        if (err) {
            console.log(err);
        } else {
            console.log(stdout);

        }

    });

    console.log(files);
    return files;
}

module.exports = {
    tree1: tree1,
    tree2: tree2

};