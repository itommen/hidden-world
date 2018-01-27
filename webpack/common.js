const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const publicPath = 'http://localhost:8080/';

module.exports = {
  entry: [
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, '..', 'dist/client'),
    filename: '[name].[hash].js',
    publicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 }
        }]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        use: ['file-loader']
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less?$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.less', '.css', '.html']
  }
};
