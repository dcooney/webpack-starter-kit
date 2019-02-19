var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var config = require('../webpack.config.js');

config.watch = false;

config.entry = {
   'index.min': './src/js/index.js',
   'styles.min': './src/scss/styles.scss'
};

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	})
);

config.plugins.push(
	new ExtractTextPlugin({ filename: './css/styles.min.css' })
);

module.exports = config;
