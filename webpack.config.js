const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
	// entry: path.resolve('./src/index.ts'),
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		// 'react-hot-loader/patch',
		path.resolve('./src/index.tsx')
	],	
	output: {
		filename: 'bundle.js',
		path: path.resolve('./dist'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js', '.json', '.css', '.png', '.jpg']
	},
	resolveLoader: {
		'fallback': path.join(__dirname, 'node_modules')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./src/index.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

const loaders = [
	{
		test: /\.tsx?$/,
		loaders: [
			'react-hot',
			'babel-loader',
			'ts-loader'
		]
	},
	{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }
];

const devServer = {

};

config.module = {
	loaders
};

module.exports = config;