var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dir = 'dist';

module.exports = {
   entry: {
      index: "./src/js/index.js",
      styles: './src/scss/style.scss'
   },
	output: {
   	path: path.join(__dirname, 'dist'),
      filename: "js/[name].js"
   },
	watch: true,
	module: {
		loaders: [
		{
			test: /.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['env']
			}
		},
		{
		test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader', 'eslint-loader']
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
               { loader: 'css-loader' },
               { loader: 'postcss-loader' },
               { loader: 'sass-loader',
                  options: {
                     outputStyle: 'expanded'
                  },
               }
             ]
			}),
			exclude: /node_modules/,
		}
	]},
	plugins: [
		new ExtractTextPlugin({ filename: './css/[name].css' })
	]

};
