var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dir = 'dist';

module.exports = {
   entry: {
      index: "./src/js/index.js",
      styles: "./src/scss/styles.scss"
   },
	output: {
   	path: path.join(__dirname, dir),
      filename: "js/[name].js",
	},
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /node_modules/,
			  use: ['babel-loader']
			},
			{
				test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
				loader: "file-loader",
				options: {
					name: 'img/[name].[ext]',
					publicPath: '../'
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{ loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{ loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{ loader: 'sass-loader',
							options: {
								sourceMap: true,
								outputStyle: 'expanded'
							},
						}
					]
				}),
				exclude: /node_modules/,
			}
		 ]
	},
	plugins: []
};
