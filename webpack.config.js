var path = require('path');

module.exports = {
    watch  : true,
    devtool: 'inline-source-map', // or eval
    entry  : './js/main.js',
    output : {
        filename: 'main.bundle.js',
        path    : path.resolve(__dirname, 'js')
    }
};