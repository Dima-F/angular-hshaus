const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 9000
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new WriteFilePlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
