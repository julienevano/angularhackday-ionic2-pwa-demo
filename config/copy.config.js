
// https://www.npmjs.com/package/fs-extra

module.exports = {
  include: [
    {
      src: '{{SRC}}/assets/',
      dest: '{{WWW}}/assets/'
    },
    {
      src: '{{SRC}}/manifest.json',
      dest: '{{WWW}}/manifest.json'
    },
    {
      src: 'node_modules/ionic-angular/polyfills/polyfills.js',
      dest: '{{BUILD}}/polyfills.js'
    },
    {
      src: 'node_modules/ionicons/dist/fonts/',
      dest: '{{WWW}}/assets/fonts/'
    },
    {
      src: 'resources/icon.png',
      dest: '{{WWW}}/assets/imgs/logo.png'
    }
  ]
};
