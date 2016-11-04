var ionicWebpackConfig = require('@ionic/app-scripts/config/webpack.config');
var manifest = require('../src/manifest.json');
var webpackMerge = require('webpack-merge');

//  Webpack plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack config
module.exports = webpackMerge(ionicWebpackConfig, {
  plugins: [
    /*
    * Plugin: HtmlWebpackPlugin
    * Description: Simplifies creation of HTML files to serve your webpack bundles.
    * This is especially useful for webpack bundles that include a hash in the filename
    * which changes every compilation.
    *
    * See: https://github.com/ampedandwired/html-webpack-plugin
    */
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunksSortMode: 'dependency',
      options: {
        title: manifest.name
      }
    })
  ]
});