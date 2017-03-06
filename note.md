Note
===


# 設計
分為幾個主要的模組:
1. injecting
2. buindling
3. watch

### injecting
主要負責注入資料到特定檔案的動作.

### building
主要負責minify, sass/less編譯的動作.

### watch
主要負責有檔案變更或新增時要處理的事項.

# Injecting
主要使用的套件:
1. wiredep
2. gulp-inject

### wiredep
以bower.json的定義, 將有安裝的套件引入到index.html中使用, 而不必手動做引用.

1. bower.json檔案中, 引入的套件需為`dependencies`
2. 執行`bower install`安裝所有套件
3. wiredep會依據套件中的`bower.json`的`main`參數, 決定要引入的檔案
4. 若main中的定義無法引入bootstrap.css, 表示沒有定義css, 要在我們的bower.json定義`override`來取代, 才有辦法使用wiredep引入
5. bower還可以在安裝好新的套件後, 執行script的hook. 在`.bowerrc`中定義就可以了.
6. bower還可以在解除安裝套件後, 執行script的hook. 在`.bowerrc`中定義就可以了.

index.html中要定義好區塊讓wiredep作插入
```
<!-- bower:css -->
<!-- endbower -->
<!-- bower:js -->
<!-- endbower -->
```

```
bootstrap的bower.json - 沒有定義bootstrap.css檔
  "main": [
    "less/bootstrap.less",
    "dist/js/bootstrap.js"
  ],
  //我們的bower.json
  "overrides": {
    "bootstrap": {
      "main": [
        "dist/js/bootstrap.js", <--這一行
        "dist/css/bootstrap.css",
        "less/bootstrap.less"
      ]
    }
  }
```

.bowerrc : 裝好新的套件執行`gulp wiredep`
```
{
  "directory": "bower_components",
  "scripts": {
    "postinstall": "gulp wiredep",
    "postuninstall": "gulp wiredep"
  }
}
```


### gulp-inject
引入我們自己寫的js, css檔案.

index.html中要定義好區塊讓gulp-inject作插入
```
<!-- inject:css -->
<!-- endinject -->
<!-- inject:js -->
<!-- endinject -->
```