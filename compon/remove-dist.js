'use strict';

const fs = require('fs');
const exec = require('child_process').execSync;

if (fs.existsSync('dist')) {
    console.log('Remove assets directory');
    let isWin = /^win/.test(process.platform);
    if (isWin) {
        exec(`rmdir /S /Q dist`);
    } else {
        exec('rm -rf dist');
    }
} else {
    console.log(`Directory does not exists. Nothing to do here...`);
}
