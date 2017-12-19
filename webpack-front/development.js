// const helpers = require('./helpers');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractCSS = new ExtractTextPlugin('[name].[hash].bundle.css', 'styles/[name].[hash].bundle.css');
var extractCSS = new ExtractTextPlugin('[name].[hash].bundle.css', '[name].[hash].bundle.css');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var PATHS = {
    app: './src',
    build: './public/build'
};
module.exports = {

    entry: {
        main: PATHS.app + '/app/index.module.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].[hash].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
                test: /\.scss$/i,
                loader: extractCSS.extract(['css', 'sass'])
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=10&name=images/[name].[ext]',
                fallback: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: PATHS.app + '/images',
            to: 'images'
        }, {
            from: PATHS.app + '/favicon.ico',
            to: 'favicon.ico'
        }]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i
        }),
        extractCSS,
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            },
            exclude: [/\.min\.js$/gi], // skip pre-minified libs
            mangle: true,
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                negate_iife: false
            }
        })
    ]
};
