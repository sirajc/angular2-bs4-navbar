module.exports = function () {
  var client = './src/';

  var config = {
    /**
     * File paths
     */
    src: client,
    build: './build/',
    html: client + '**/*.html',
    css: client + '**/*.css',
    ts: client + '**/*.ts',

    defaultPort: '7203'
  };

  return config;
};
