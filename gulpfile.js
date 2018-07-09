let gulp   = require('gulp')
    babel  = require('gulp-babel')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')

gulp.task('default', function () {
  return gulp.src('./src/index.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('vuelidate-error-helper.min.js'))
    .pipe(gulp.dest('./dist'))
})