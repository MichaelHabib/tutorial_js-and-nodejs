const util = require('util')
// const os = require( 'os' );
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const devMode = process.env.NODE_ENV !== 'production';

var config = {};
/*  paths */
config.paths = {};
//config.paths.root = path.resolve(__dirname, ``);
config.paths.root = path.resolve(__dirname, `../../`);

config.paths.src = path.join(`${config.paths.root}`, `source/`);
config.paths.src_js = path.join(`${config.paths.src}`, `js/`);
config.paths.src_css = path.join(`${config.paths.src}`, `css/`);
config.paths.src_images = path.join(`${config.paths.src}`, `images/`);
config.paths.src_fonts = path.join(`${config.paths.src}`, `fonts/`);

config.paths.dist = path.join(`${config.paths.root}`, `public/`);
config.paths.dist_js = path.join(`${config.paths.dist}`, `js/`);
config.paths.dist_css = path.join(`${config.paths.dist}`, `css/`);
config.paths.dist_images = path.join(`${config.paths.dist}`, `images/`);
config.paths.dist_fonts = path.join(`${config.paths.dist}`, `fonts/`);

/*  options  */
config.enabled = {};
config.enabled.sourceMaps = true;

console.log(`== config.paths.root = ${config.paths.root}`);


var webpackConfig = {
    mode: 'development',
    context: `${config.paths.root}`,

    entry: {
        app: './source/js/index.js',
        // image: './source/images/extra-image-test-copy.jpg',

    },
    output: {
        filename: 'js/[name].js',
        path: `${config.paths.dist}`
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: [
                    '/node_modules/',
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                [
                                    "@babel/preset-env",
                                    {
                                        "useBuiltIns": "entry"
                                    }
                                ]
                            ]
                        }
                    }
                    //         {
                    //             loader: 'file-loader',
                    //             options: {
                    //                 // name: 'js/[name].js',
                    //             }
                    //         }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [

                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: `[name].[ext]`,
                    //     }
                    // },
                    /*
                    Creates style nodes from JS strings. Uses JS Module to insert style into the page.
                    */
                    // {
                    //     loader: "style-loader",
                    // },
                    /*
                    Extracts CSS into a separate file. CommonJS to CSS file.
                    */
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // publicPath: `${config.paths.dist_css}`, // Not working !
                            publicPath: `../`, //prefix to css assets URL

                        }
                    },
                    /*
                    Translates CSS into CommonJS - CSS to JS Module
                    */
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    /*
                    Compiles Sass to CSS - SCSS to CSS
                    */
                    {
                        loader: "sass-loader",
                        options: {
                            // name: 'css/[name].sass-loader.css',
                            // includePaths: [`${config.paths.src}/scss`],
                            sourceMap: true,
                            sourceComments: true,
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                // test: /\.(png|svg|jpg|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: 'images/[name].[ext]',
                    //     }
                    // },

                    // Loads files as base64 URL. Options passed on to fallback loader.
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 2,
                            limit: 20000,
                            fallback: 'file-loader',
                            name: 'images/[name].[ext]',

                        },
                    },
                ]
            },
            {
                test: /\.svg/,
                use: {
                    // Loads files as utf-8 URL. Options passed on to fallback loader.
                    loader: 'svg-url-loader',
                    options: {
                        // limit: 2,
                        limit: 20000,
                        fallback: 'file-loader',
                        name: 'images/[name].[ext]',

                    },
                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            // title: 'Output Management'
        }),
        new HtmlWebpackTagsPlugin({
            tags: [
                // 'http://webtest1.com:48801/livereload.js'
            ],
            append: true
        }),

        // new webpack.ProvidePlugin({
        //     jQuery: 'jquery'
        // }),
        // new LiveReloadPlugin({
        //     'appendScriptTag ': true,
        //     'protocol': 'http',
        //     'port': 48802,
        //     // 'hostname': 'webtest1.com',
        //     'hostname': '192.168.8.203',
        // }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            // host: 'webtest1.com',
            host: '192.168.8.203',
            port: 48801,
            open: false,
            server: {baseDir: ['public']}
        }),
        new CleanWebpackPlugin({
            // root: `${config.paths.root}`,
            // exclude: ['shared.js'],
            cleanOnceBeforeBuildPatterns: [`${config.paths.dist}/*`],
            verbose: true,
            // dry: true
        }),
        new CopyPlugin([
            // {from: config.paths.src_images, to: config.paths.dist_images},
        ]),
    ]
};

module.exports = webpackConfig;
