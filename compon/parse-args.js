var args = require('minimist')(process.argv.slice(2));

var host = args.host || args.h || 'localhost';
var port = Number(args.port || args.p || '8080');
var ie = !!args.ie;
var address = `http://${host}:${port}/`;

console.log('Running with params:');
console.log(`HOST=${host}`);
console.log(`PORT=${port}`);
console.log(`IE=${ie}`);

module.exports = {
    HOST: host,
    PORT: port,
    IE: ie,
    ADDRESS: address,
}
