const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');

let sass = gulpSass(dartSass);

function css_style() {
   gulp.src('./style.scss')
      .pipe(sass({
         errorLogToConsole: true,
         outputStyle: 'compressed',
      }))
      .on('error', console.error.bind('console'))
      .pipe(gulp.dest('./index.css'))
   
   
}

gulp.task('default', css_style());