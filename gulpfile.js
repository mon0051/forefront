var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('default', function () {
    "use strict";
    gulp.src('./styles/bootstrap/scss/bootstrap-flex.css')
        .pipe(rename(function (path) {
            path.dirname = './';
            path.basename = 'styles';
            path.extname = '.css';
        }))
        .pipe(gulp.dest('./'));

    gulp.src('./styles/bootstrap/scss/bootstrap-flex.css.map')
        .pipe(rename(function (path) {
            path.dirname = './';
            path.basename = 'styles.css';
            path.extname = '.map';
        }))
        .pipe(gulp.dest('./'));
});
