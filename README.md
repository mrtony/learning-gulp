Note
===

# gulp四大API
* gulp.task
* gulp.src
* gulp.dest
* gulp.watch

# gulp package
* yargs: 帶參數, --verbose --> verbose = true

# code quality

```
npm install gulp-jshint gulp-jscs jshint --save-dev
npm install jshint-stylish --save-dev
npm install gulp-print --save-dev
npm install gulp-if --save-dev
npm install yargs --save-dev
npm install gulp-load-plugins --save-dev
```

需在目錄下建立`.jshintrc`, `.jscsrc`設定規則.

### 建立log
```
npm install gulp-util --save-dev
```

---

# 輸出有顏色的字串 - 使用gulp-util  
```
gulp.task('test', function() {
  console.log('test' + $.util.colors.red('123'));
});
```

