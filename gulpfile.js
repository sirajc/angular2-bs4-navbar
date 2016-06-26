var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')({lazy: true});

var colors = $.util.colors;
var envenv = $.util.env;
var port = process.env.PORT || config.defaultPort;

/**
 * Copying Css to build
 * @return {Stream}
 */
gulp.task('styles', ['clean-styles'], function () {
  log('Compiling SCSS to build');

  return gulp
    .src(config.scss)
    .pipe($.plumber()) // exit gracefully if something fails after this
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest(config.build));
});

gulp.task('scss-watcher', function () {
  gulp.watch([config.scss], ['styles']);
});

/**
 * Copying Html to build
 * TODO Add compression and other stuff for PROD
 * @return {Stream}
 */
gulp.task('html', ['clean-html'], function () {
  log('Copying Html to build');

  return gulp
    .src(config.html)
    .pipe($.plumber()) // exit gracefully if something fails after this
    .pipe(gulp.dest(config.build));
});

/**
 * Copying Html to build
 * @return {Stream}
 */
gulp.task('html-dev', function () {
  log('Syncing Html to build');

  return gulp
    .src(config.html)
    .pipe($.plumber()) // exit gracefully if something fails after this
    .pipe($.newer(config.build))
    .pipe(gulp.dest(config.build));
});

gulp.task('html-watcher', function () {
  var watcher = gulp.watch([config.html], ['html-dev']);
  watcher.on('change', function(ev) {
      if(ev.type === 'deleted') {
          del(path.relative('./', ev.path).replace(config.src,config.build));
      }
  });
});

/**
 * Transpile ts files to js
 */
var devProject = $.typescript.createProject(config.src + 'tsconfig.json');

gulp.task('tsc', function() {
  log('Transpiling typescript files using gulp');
  var tsResult = gulp.src(config.ts)
    .pipe($.sourcemaps.init())
    .pipe($.typescript(devProject));

  return tsResult.js
    .pipe($.sourcemaps.write(config.tsMaps))
    .pipe(gulp.dest(config.build));
});

gulp.task('ts-watcher', function () {
  gulp.watch([config.ts], ['tsc']);
});

/**
 * Remove all images from the build folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-images', function (done) {
  clean(config.build + 'images/**/*.*', done);
});

/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images-dev', function () {
  log('Copying images');

  return gulp
    .src(config.images)
    .pipe($.plumber())
    .pipe($.directorySync(config.src + config.imagesRoot , config.build + config.imagesRoot, { printSummary: true}));
});

gulp.task('image-watcher', function () {
  gulp.watch([config.images], ['images-dev']);
});


/**
 * Compress images
 * @return {Stream}
 */
gulp.task('images', ['clean-images'], function () {
  log('Compressing and copying images');

  return gulp
    .src(config.images)
    .pipe($.imagemin({optimizationLevel: 4}))
    .pipe(gulp.dest(config.build + 'images'));
});

/**
 * Build everything
 */
gulp.task('build', ['styles', 'html', 'tsc', 'images-dev'], function () {
  log('Building everything');

  var msg = {
    title: 'gulp build',
    subtitle: 'Deployed to the build folder',
    message: 'Running `gulp build`'
  };
  log(msg);
});

/**
 * Watch for CSS and Html changes
 */
gulp.task('default', ['build', 'scss-watcher', 'html-watcher', 'ts-watcher', 'image-watcher'], function() {
  var msg = {
    title: 'gulp',
    subtitle: 'Watching for HTML, CSS and Typescript changes...'
  };
  log(msg);
});

/**
 * Remove all files from the build, temp, and reports folders
 * @param  {Function} done - callback when complete
 */
gulp.task('clean', function (done) {
  var delconfig = [].concat(config.build + '*');
  clean(delconfig, done);
});

/**
 * Remove all styles from the build folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-styles', function (done) {
  var files = [].concat(
    config.build + '**/*.css'
    );
  clean(files, done);
});

/**
 * Remove all html from the build folder
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-html', function (done) {
  var files = [].concat(
    config.build + '**/*.html'
    );
  clean(files, done);
});

/**
 * Remove all js and html from the build and temp folders
 * @param  {Function} done - callback when complete
 */
gulp.task('clean-code', function (done) {
  var files = [].concat(
    config.build + '**/*.js',
    config.build + '**/*.html'
    );
  clean(files, done);
});

/**
 * Delete all files in a given path
 * @param  {Array}   path - array of paths to delete
 * @param  {Function} done - callback when complete
 */
function clean(path, done) {
  log('Cleaning: ' + $.util.colors.blue(path));
  del(path).then(function() {
    if(typeof done === 'function')
      done();
  });
}

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

module.exports = gulp;
