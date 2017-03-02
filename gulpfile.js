var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')(); //為何加() : 因為它是一個function的module

var $ = require('gulp-load-plugins')({lazy: true});

//code quality by jscs, jshint
gulp.task('vet', function() {
  log(args);
  log('Analyze source with JSHint and JSCS');
  return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

/////////

//可輸出字串或物件的內容, 並設定log的顏色
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if
       (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  }
  else {
    $.util.log($.util.colors.blue(msg));
  }
}