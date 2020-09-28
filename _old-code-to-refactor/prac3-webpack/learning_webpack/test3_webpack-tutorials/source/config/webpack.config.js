const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `css/[name].[ext]`,
                        }
                    },
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                    },
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
            }, {
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
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
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


module.exports = webpackConfig;