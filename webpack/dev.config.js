var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var config = require('../webpack.config.js');

config.watch = true;
config.devtool = "source-map",

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"development"'
		}
	})
);

config.plugins.push(
	new ExtractTextPlugin({ filename: './css/styles.css' })
);

module.exports = config;
