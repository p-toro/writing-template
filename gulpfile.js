const gulp = require('gulp');
const concat = require('gulp-concat');

const paths = {
  texts: {
    src: './src/**/*.txt',
    dest: './build/'
  }
};

function texts() {
  return gulp.src([
    './src/chapter/01/**/*.txt',
    './src/chapter/02/**/*.txt',
    './src/chapter/03/**/*.txt' //There is no problem in setting a large amount
  ])
  .pipe(concat('all.txt'))
  .pipe(gulp.dest(paths.texts.dest));
}

exports.texts = texts;
exports.build = texts;
exports.default = texts;
