let gulp   = require('gulp')
    babel  = require('gulp-babel')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')

gulp.task('default', function () {
  return gulp.src([
    './src/index.js',
    './src/messages.js',
    './src/mixin.js'
  ])
  .pipe(babel())
  .pipe(uglify())
  .pipe(rename(function (path) {
    if (path.basename === 'index') {
      path.basename = 'vuelidate-error-helper'
    }
  }))
  .pipe(gulp.dest('./dist'))
})