var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry  : './js/main.js',
    output : {
        filename: 'main.bundle.js',
        path    : path.resolve(__dirname, 'js')
    }
};