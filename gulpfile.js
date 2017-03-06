var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')(); //為何加() : 因為它是一個function的module

var $ = require('gulp-load-plugins')({lazy: true});


gulp.task('wiredep', function() {
  console.log($.util.colors.green('******start wiredep injection: wire up the bower css js and our app js into the html******'));
  //get wiredep default options
  var options = config.getWiredepDefaultOptions();
  var wiredep = require('wiredep').stream;
  gulp
  .src(config.index)
  .pipe(wiredep(options))
  .pipe($.inject(gulp.src(config.js)))
  .pipe($.inject(gulp.src(config.css)))
  .pipe(gulp.dest(config.client));
  
  console.log($.util.colors.green('******end wiredep injection******'));
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