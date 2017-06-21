const fs = require('fs');
const through = require('through2');
const parseHtml = require('html-to-object');

const PLUGIN_NAME = 'gulp-html-to-object';

function h2o (options) {
  return through.obj((file, enc, cb) => {
    let content = (file.isBuffer()) ? file.contents.toString():file.contents;
    if (content.indexOf('h2o(') === -1) return cb(null, file);

    while (content.indexOf('h2o(') > -1) {
      let func = content.substring(content.indexOf('h2o('), content.length);
      func = func.substring(0, func.indexOf(')') + 1);

      const path = func.substring(0, func.length - 2).replace('h2o(\'', '');
      content = content.replace(func, JSON.stringify(parseHtml(path, options)));
    }

    file.contents = Buffer.from(content, 'utf8');
    cb(null, file);
  });
}

module.exports = h2o;
