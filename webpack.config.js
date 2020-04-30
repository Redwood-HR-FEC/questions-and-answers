const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'client', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    mode: 'development'
};