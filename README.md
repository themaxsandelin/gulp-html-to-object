# gulp-html-to-object
The gulp plugin of the lightweight HTML parser [html-to-object](https://npmjs.com/html-to-object).

## Install
`$ npm install --save gulp-html-to-object`

## Usage
```javascript
// source file
const modal = h2o('./path/to/file.html');

// gulpfile.js
const gulp = require('gulp');
const h2o = require('gulp-html-to-object');

gulp.task('javascript', () => {
  return gulp.src('./src/*.js')
    .pipe(h2o())
    .pipe(gulp.dest('./dist'));
});
```

## License
[MIT](LICENSE) © [Max Sandelin](https://github.com/themaxsandelin)
