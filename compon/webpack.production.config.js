var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCss = new ExtractTextPlugin('index.css');
var extractCssIE9 = new ExtractTextPlugin('ie9-index.css');

var CONTEXT_ROOT = process.env.CONTEXT_ROOT || 'master';

module.exports = {
    entry: [
        './demo/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist', 'assets'),
        filename: 'index.js',
        publicPath: '/' + CONTEXT_ROOT + '/assets/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            components: path.join(__dirname),
            api: path.join(__dirname, 'src', 'api')
        }
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /[^_]\.css$/,
                loader: extractCss.extract("style", "css!postcss")
            },
            {
                test: /ie9_\.css$/,
                loader: extractCssIE9.extract("style", "css!postcss")
            },
            {
                test: /[^_]\.scss$/,
                loader: extractCss.extract("style", "css!sass")
            },
            {
                test: /ie9_\.scss$/,
                loader: extractCssIE9.extract("style", "css!sass")
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.(otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        extractCss,
        extractCssIE9,
        new HtmlWebpackPlugin({
            title: 'Sberbank reusable UI blocks',
            filename: '../index.html',
            template: 'index.html'
        })
    ],
    postcss: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-media-minmax'),
        require('postcss-custom-media'),
        require('postcss-mixins'),
        require('postcss-advanced-variables')({
            variables: require('./src/variables')
        }),
        require('postcss-color-function'),
        require('postcss-import'),
    ]
};
