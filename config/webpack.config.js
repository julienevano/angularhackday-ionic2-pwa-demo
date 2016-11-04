var ionicWebpackConfig = require('@ionic/app-scripts/config/webpack.config');
var manifest = require('../src/manifest.json');
var webpackMerge = require('webpack-merge');

//  Webpack plugins
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
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
    }),

    /*
     * Plugin: FaviconsWebpackPlugin
     * Description: Allows to use the favicons generator with webpack.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#faviconswebpackplugin
     */
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../resources/icon.png'),
      prefix: 'assets/icons/favicons-[hash]/',
      background: manifest.background_color,
      title: manifest.name,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: true,
        yandex: false,
        windows: false
      }
    })
  ]
});