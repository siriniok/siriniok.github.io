const gulp = require('gulp');

gulp.task('sass', function() {
  gulp.src(['./node_modules/sassline/assets/sass/**/*'])
    .pipe(gulp.dest('../_sass/vendor/sassline/'));
});

gulp.task('css', function() {
  gulp.src('./node_modules/sassline/assets/css/style.min.css')
    .pipe(gulp.dest('../vendor/assets/css/'));
});

gulp.task('js', function() {
  gulp.src('./node_modules/sassline/assets/js/responsive-nav.min.js')
    .pipe(gulp.dest('../vendor/assets/js/'));
});

gulp.task('default', ['sass', 'js']);
