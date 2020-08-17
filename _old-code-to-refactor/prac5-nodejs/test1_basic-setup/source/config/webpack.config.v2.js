const util = require('util')
// const os = require( 'os' );
const path = require('path');
// const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');


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

console.log(`== config.paths.root = ${config.paths.root}`);

var webpackConfig = {
    mode: 'development',
    context: `${config.paths.root}`,

    entry: {
        app: './source/index.js',

    },
    output: {
        filename: '[name].js',
        path: `${config.paths.dist}`
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // Extract CSS into a separate file.

                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // Translates CSS into CommonJS - CSS to JS Module
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    // Compiles Sass to CSS - SCSS to CSS
                    {
                        loader: "sass-loader",
                        options: {

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
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            // title: 'Output Management'
        }),
        new HtmlWebpackTagsPlugin({
            tags: [
                'http://192.168.8.203:8889/livereload.js'
            ],
            append: true
        }),
        new LiveReloadPlugin({
            'appendScriptTag ': true,
            'protocol': 'http',
            'port': 8889,
            // 'hostname': 'webtest1.com',
            'hostname': '192.168.8.203',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [`${config.paths.dist}/*`],
            verbose: true,
            // dry: true
        }),
    ]
};

module.exports = webpackConfig;