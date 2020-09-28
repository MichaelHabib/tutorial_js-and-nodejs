'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

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


let webpackConfig = {
    context: `${config.paths.root}`,
    mode: 'development',
    entry: {
        // removing 'src' directory from entry point, since 'context' is taking care of that
        main: './source/index.js',
//        main_css: './source/scss/main.scss',
    },
    output: {
        path: config.paths.dist,
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: [/source\/index.js/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './js/[name].js',
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `css/[name].css`,
                        }
                    },
//                    {
//                        loader: "style-loader",
//                    },
//                    {
//                        loader: "css-loader", // translates CSS into CommonJS
//                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
                        options: {
                            name: 'css/[name].sass-loader.css',
                            includePaths: [`${config.paths.source}scss`],
                            sourceMap: true,
                            sourceComments: true,
                        }
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        }
                    },
                ]
            }
        ],

    },
    plugins: [
//        new ExtractTextPlugin("custom.css"),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
//        new HtmlWebpackPlugin({
//            title: 'Output Management'
//        }),
        new CleanWebpackPlugin([
            'dist',
            'build',
            'assets'
        ], {
            root: `${config.paths.root}`,
            exclude: ['shared.js'],
            verbose: true,
            dry: false
        }),
    ]
};
/*
 * ********************************************
 * Create & push config per module into webpackConfig.module
 */

/*  config_SCSS  */
let config_scss = {
    test: /\.scss$/,
    include: config.paths.source,
    use: ExtractTextPlugin.extract({
        fallback: 'style',
        use: [
            {loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])}
        ],
    }),
};
//webpackConfig.module.rules.push(config_scss);
//webpackConfig.module.rules.push(JSON.stringify(config_scss));


/*
 * ********************************************
 * Create & push plugins into webpackConfig.plugins
 */
let plugins_extractText = new ExtractTextPlugin({// define where to save the file
    filename: 'dist/[name].bundle.css',
    allChunks: true
});
//webpackConfig.plugins.push(plugins_extractText);
/*
 * ********************************************
 * export webpackConfig
 */

//console.log(webpackConfig);
module.exports = webpackConfig;