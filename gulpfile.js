var gulp = require('gulp'),
  path = require('path');

var mocha = require('gulp-mocha');


var srcFile = './genomatic.js';
var buildFolder = '.'



gulp.task('test', function () {
  return gulp.src('./test/test.js', { read: false })
      .pipe(mocha({
        ui: 'exports',
        reporter: 'spec'
      }))
    ;
});


gulp.task('default', ['test']);



