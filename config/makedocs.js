module.exports = function (grunt) {

  var path = require('path');
  var component = require('../tasks/component');

  return {
    options: {
      layoutsDir: 'src/layouts/',
      partialsDir: 'src/partials/',
      postRender: component,
    },
    dev: {
        options: {
            build: false,
            nav: false
        },
        files: [
            {
              expand: true,
              cwd: 'src/pages/',
              src: ['**/*.md', '!sample.md'],
              dest: 'dev/',
              rename: function(dest, src) {
                // remove numbers from start of file and dir
                return dest + src.replace(/\d+\-/g, '');
              },
              ext: '.html'
            }
        ]
    },
    build: {
        options: {
            build: {
                release: true
            },
            nav: false
        },
        files: [
            {
              expand: true,
              cwd: 'src/pages/',
              src: ['**/*.md', '!sample.md'],
              dest: 'build/',
              rename: function(dest, src) {
                // remove numbers from start of file and dir
                return dest + src.replace(/\d+\-/g, '');
              },
              ext: '.html'
            }
        ]
    },
    preview: {
        options: {
            build: {
                preview: true
            },
            nav: false
        },
        files: [
            {
              expand: true,
              cwd: 'src/pages/',
              src: ['**/*.md', '!sample.md'],
              dest: 'build/',
              rename: function(dest, src) {
                  // remove numbers from start of file and dir
                  return dest + src.replace(/\d+\-/g, '');
              },
              ext: '.html'
            }
        ]
    }
  };
};
