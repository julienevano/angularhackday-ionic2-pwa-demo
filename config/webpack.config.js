var ionicWebpackConfig = require('@ionic/app-scripts/config/webpack.config');
var manifest = require('../src/manifest.json');
var package = require('../package.json');
var path = require('path');
var webpackMerge = require('webpack-merge');

//  Webpack plugins
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OfflinePlugin = require('offline-plugin');

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
    }),

    /**
     * Plugin: OfflinePlugin
     * Description: This plugin is intended to provide offline
     * experience for webpack projects. It uses ServiceWorker
     * and AppCache as a fallback under the hood.
     *
     * See: https://github.com/NekR/offline-plugin
     */
    new OfflinePlugin({
      caches: {
        main: [
          'index.html',
          'main.css',
          'polyfills.js',
          'main.js',
          'assets/icon/favicon.ico',
          'assets/icon/favicons-*/favicon.ico',
          'assets/fonts/ionicons.woff2',
          'assets/fonts/ionicons.woff',
          'assets/fonts/ionicons.ttf',
          'assets/imgs/logo.png'
        ],
        additional: [
          'manifest.json',
          'assets/icons/favicons-*/*.png'
        ],
        optional: [
        ]
      },
      externals: [
        'polyfills.js',
        'assets/fonts/*.*',
        'assets/imgs/logo.png'
      ],
      excludes: ['**/*.gz', '**/.cache'],
      updateStrategy: 'all',
      version: package.version + '.[hash]',

      relativePaths: true,

      ServiceWorker: {
        output: 'sw.js'
      },

      AppCache: {
        directory: 'appcache/'
      }
    })
  ]
});