'use strict'; // eslint-disable-line


const webpack = require('webpack');
/*  HTTP, Requests, Routers */
const http = require('http');
const url = require('url');
/* OS,  FS & File management */
const path = require('path');
const fs = require('fs');
const util = require('util');

/* webpack plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const devMode = process.env.NODE_ENV !== 'production';
const appDirectory = fs.realpathSync(process.cwd());
var config = {};

/*  paths config */
config.paths = {};
config.paths.root = path.resolve(__dirname, `./../`);
// config.paths.root = path.resolve(__dirname, `../../`);
config.paths.src = path.join(`${config.paths.root}`, `/src/`);
config.paths.dist = path.join(`${config.paths.root}`, `/dist/`);
config.paths.static = path.join(`${config.paths.root}`, `/static/`);
/*  options  */
config.enabled = {};
config.enabled.sourceMaps = true;

/* webpack plugins config */
config.plugins = {};

console.log(`- config.paths.root = ${config.paths.root}`);
// console.log(`- config.paths.src = ${config.paths.src}`);


let webpackConfig = {
	context: `${config.paths.root}`,
	// context: `${config.paths.src}`,
	mode: 'development',
	watch: true,
	entry: {
		//   // removing 'src' directory from entry point, since 'context' is taking care of that
		main: path.join(`${config.paths.src}`, `main.js`)
		//   //        main_css: './src/scss/main.scss',
	},

	output: {
		path: config.paths.dist,
	},
	module: {
		rules: [
			// {
			// 	test: /\.css/,
			// 	include: [
			// 		config.paths.static
			// 	],
			// 	exclude: [],
			// 	use: [{
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: 'static/[name].[ext]',
			// 		}
			// 	}]
			// },
			{
				test: /\.js/,
				include: [],
				exclude: [],
				use: [
					// {
					// 	loader: 'file-loader',
					// 	options: {
					// 		name: 'js/[name].js',
					// 	}
					// },

					// {
					// 	loader: 'babel-loader',
					// 	options: {
					// 		presets: ['es2015', 'react']
					// 	}
					// }
				]
			},

			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// {
					// 	loader: 'file-loader',
					// 	options: {
					// 		name: `css/[name].css`,
					// 	}
					// },

					{
						loader: "style-loader",

					},
					{
						loader: "css-loader", // translates CSS into CommonJS
					},
					{
						loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
						// options: {
						// 	name: 'css/[name].sass-loader.css',
						// 	includePaths: [`${config.paths.src}scss`],
						// 	sourceMap: true,
						// 	sourceComments: true,
						// }

					}
				],
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: [
					// {
					// 	loader: 'url-loader',
					// 	options: {
					// 		limit: 8192
					// 	}
					// },


					{
						loader: 'file-loader',
						options: {
							name: `images/[name].[ext]`,
							outputPath: "", //Value not used in image URI
							publicPath: './dist/',

						}
					}
				]
			}
		],

	},
	plugins: [
		new LiveReloadPlugin({
			port: 8081
		}),
		new DashboardPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		//        new ExtractTextPlugin("custom.css"),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		// new HtmlWebpackPlugin({
		// 	title: 'Output Management'
		// }),



		new CleanWebpackPlugin([
			`${config.paths.dist}`
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
 * export webpackConfig
 */

//console.log(webpackConfig);
module.exports = webpackConfig;
