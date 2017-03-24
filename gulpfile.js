const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('src/Index.scss')
      .pipe(
        sass({outputStyle: 'compact'}).on('error', sass.logError)
      )
      .pipe(gulp.dest('src/'))
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(['src/Index.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch'], function () {

});
