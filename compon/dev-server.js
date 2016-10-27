var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server')
var args = require('./parse-args');

var config;
if (args.IE) {
    config = require('./webpack.ie.config.js');
} else {
    config = require('./webpack.config.js');
    config.entry.unshift('webpack/hot/dev-server');
    config.entry.unshift(`webpack-dev-server/client?${args.ADDRESS}`);
}

var devServerConfing = {
    hot: !args.IE,
    stats: { colors: true },
    historyApiFallback: true
};

new webpackDevServer(webpack(config), devServerConfing).listen(args.PORT, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Will handle requests to ${args.ADDRESS}`);
    }
});
