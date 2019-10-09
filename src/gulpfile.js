'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
const del = require('del');
const concat  = require('gulp-concat');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(['./styles.scss', './app/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/**/*.scss', ['app']);
});

gulp.task('clean', function () {
  return del([
    'styles.css'
  ]);
});

gulp.task('default', gulp.series(['clean', 'sass']));
