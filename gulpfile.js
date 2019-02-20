var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function() {
    gulp.src(['js/*.js'])
        .pipe(browserify())
        .pipe(concat(['js/*.js']))
        .pipe(gulp.dest('dest/app.min.js'))
        
})

gulp.task('styles', function() {
    gulp.src(['css/*.css'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/app.min.css'))
})


  gulp.task('watch', function() {
    gulp.watch('css/*.css', gulp.series('styles'));
    gulp.watch('js/*.js', gulp.series('scripts'));
  });