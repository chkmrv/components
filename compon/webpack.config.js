var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var args = require('./parse-args');

module.exports = {
    entry: [
        './demo/app.jsx'
    ],
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'index.js',
        publicPath: args.ADDRESS
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
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap!csslint?failWarning=false!postcss'
            },
            {
                test: /\.scss$/,
                loader: 'style!css?sourceMap!sass'
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
        new webpack.NormalModuleReplacementPlugin( /_ie9_./, function(result) {
            result.request = result.request.replace( /_ie9_./, '.');
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin()
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
