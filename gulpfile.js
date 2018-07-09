let gulp  = require('gulp')
    babel = require('gulp-babel')
    uglify = require('gulp-uglify')

gulp.task('default', function () {
  return gulp.src('./src/index.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})