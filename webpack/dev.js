const { NamedModulesPlugin, HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./common.js');

const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const publicPath = 'http://localhost:8080/';

module.exports = merge(common, {
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: publicPath })
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:2222/',
        secure: false
      }
    },
    historyApiFallback: true,
    hotOnly: true
  },
  devtool: 'source-map',
  watch: true
});
