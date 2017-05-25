var path = require('path');

module.exports = {
    watch       : true,
    devtool     : 'inline-source-map', // eval // eval-inline-source-map
    entry: './js/main.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'js')
    }
};