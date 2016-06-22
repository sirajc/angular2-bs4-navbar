module.exports = function () {
  var client = './src/';

  var config = {
    /**
     * File paths
     */
    src: client,
    build: './build/',
    ghPages: './io-gh-pages/',
    tsMaps: '.', // write map in same location as js
    html: client + '**/*.html',
    css: client + '**/*.css',
    ts: client + '**/*.ts',
    images: client + 'images/**/*.*',
    imagesRoot: 'images',

    defaultPort: '7203'
  };

  return config;
};
