const path = require('path');


var config = {};
/*  paths */
config.paths = {};
//config.paths.root = path.resolve(__dirname, ``);
config.paths.root = path.resolve(__dirname, `../../`);
config.paths.src = path.join(`${config.paths.root}`, `source/`);
config.paths.dist = path.join(`${config.paths.root}`, `assets/`);
/*  options  */
config.enabled = {};
config.enabled.sourceMaps = true;

console.log(`- config.paths.root = ${config.paths.root}`);

var webpackConfig = {
    mode: 'development',
    context: `${config.paths.root}`,

    entry: {
        app: './source/index.js'
    },
    output: {
        filename: 'main.js',
        path: `${config.paths.dist}`
    },
    devtool: 'eval',
    module: {
        rules: [

        ]
    },
    plugins: [

    ]
};


module.exports = webpackConfig;