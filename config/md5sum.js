var util = require('util');

module.exports = {
  release: {
    options: {
      // Remove local directory info from filenames
      process: function(content, files) {
        var contentArray = JSON.parse(content);
        var output = '';
        var cwd = process.cwd();
        contentArray.forEach(function(file, i) {
          if (!file) return;
          output+= util.format('%s  %s\n', file.hash, file.file.replace(cwd, ''));
        });
        return output;
      }
    },
    files: [{
      cwd: 'release/',
      src: ['**/*'],
      dest: 'release/sum.md5'
    }]
  }
};