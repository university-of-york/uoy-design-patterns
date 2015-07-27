module.exports = {
  dev: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['favicon.ico', 'js/**', 'img/**', 'fonts/**', 'media/**'],
      dest: 'dev/'
    }]
  },
  study: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['study-new/**'],
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