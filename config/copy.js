module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['favicon.ico', 'js/**', 'img/**', 'fonts/**', 'media/**'],
      dest: 'dev/'
    }]
  },
  templates: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['templates/**'],
      dest: 'dev/'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['favicon.ico', 'fonts/**', 'media/**', 'js/prism.js', 'js/usabilla.js'],
      dest: 'build/'
    }]
  }
};