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
      src: ['fonts/**', 'js/prism.js'],
      dest: 'build/'
    }]
  }
};