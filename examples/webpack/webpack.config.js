const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, './src/app.js')
	],

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'build'),
	},

	resolve: {
		alias: {
			lib: path.join(__dirname, './src/lib/')
		}
	},

	plugins: [
		// new webpack.optimize.UglifyJsPlugin()
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			}
		]
	},

	watch: true
}
