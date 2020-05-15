const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // optimization: {
  //   splitChunks: {
  //     // chunks: 'all',
  //     minSize: 100000,
  //     maxSize: 250000,
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new CompressionPlugin()],
  mode: 'production',
};
