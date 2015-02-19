module.exports = function (grunt) {

  var path = require('path');

  return {
    options: {
      layoutsDir: 'src/layouts/',
      partialsDir: 'src/partials/',
      componentsDir: 'src/components/'
    },
    dev: {
      files: [
        {
          expand: true,
          cwd: 'src/pages/',
          src: ['*.md', '!sample.md'],
          dest: 'dev/',
          rename: function(dest, src) {
            // remove numbers from start
            return dest + src.replace(/\d+\-/, '');
          },
          ext: '.html'
        }
      ]
    },
    build: {
      options: {
        build: true
      },
      files: [
        {
          expand: true,
          cwd: 'src/pages/',
          src: ['*.md'],
          dest: 'build/',
          rename: function(dest, src) {
            // remove numbers from start
            return dest + src.replace(/\d+\-/, '');
          },
          ext: '.html'
        }
      ]
    }
  }
};